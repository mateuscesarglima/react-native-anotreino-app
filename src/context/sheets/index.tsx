import { useAuth } from "@Context/auth";
import { api } from "@Services/api/api";
import { getSheetById } from "@Services/api/sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IExercise, ISheet, IUser } from "interfaces";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Settings } from "react-native/types";

interface StoragedSheet {
  id: string;
}

interface IFichaProviderProps {
  children: ReactNode;
}

interface IFichaContextProps {
  sheets: ISheet[];
  handleAddNewExercise: (
    newExercise: IExercise,
    sheetTmp: ISheet
  ) => Promise<any>;
  handleAddNewSheet: any;
  handleRemoveFicha: any;
  loadData: () => Promise<void>;
  isLoading: boolean;
  handleRemoveExercise: (
    exerciseObj: IExercise,
    sheetObj: ISheet
  ) => Promise<void>;
}

const FichaContext = createContext({} as IFichaContextProps);

export const FichaProvider = ({ children }: IFichaProviderProps) => {
  const [sheets, setSheets] = useState<ISheet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const { user } = useAuth();

  const handleAddNewSheet = async (newFicha: ISheet) => {
    try {
      let payload = {
        sheets: sheets,
      };
      payload.sheets.push(newFicha);
      const response = await api.patch(`/users/${user.id}`, payload);
      setSheets(response.data.sheets);
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  const handleAddNewExercise = async (
    newExercise: IExercise,
    sheetTmp: ISheet
  ) => {
    setIsLoading(true);
    try {
      const payload = {
        sheets: sheets,
      };
      payload.sheets.map((sheet) =>
        sheet.id === sheetTmp.id ? sheet.exercises.push(newExercise) : sheet
      );

      const response = await api.patch(`/users/${user.id}`, payload);
      setSheets(response.data.sheets);
      Toast.show({
        type: "success",
        text1: "Aviso",
        text2: "Exercicio adicionado com sucesso",
      });
    } catch (err) {
      Alert.alert(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFicha = async (sheetId: string) => {
    try {
      const payload = {
        sheets: sheets,
      };
      const sheetIndexToBeRemoved = sheets.findIndex(
        (sheet) => sheet.id === sheetId
      );
      if (sheetIndexToBeRemoved) {
        payload.sheets.splice(sheetIndexToBeRemoved, 1);
      }
      const response = await api.patch(`/users/${user.id}`, payload);
      setSheets(response.data.sheets);
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  const handleRemoveExercise = async (
    exerciseObj: IExercise,
    sheetObj: ISheet
  ) => {
    try {
      const payload = {
        sheets: sheets,
      };
      const sheetIndex = sheets.findIndex((sheet) => sheet.id === sheetObj.id);
      const newExercise = sheets[sheetIndex].exercises.map(
        (exercise) => exercise.id === exerciseObj.id
      );
      const exerciseIndex = sheets[sheetIndex].exercises.findIndex(
        (exercise) => exercise.id === exerciseObj.id
      );
      payload.sheets[sheetIndex].exercises.splice(exerciseIndex, 1);

      // const response = await api.patch(`/users/${user.id}`, payload);
      // setSheets(response.data.sheets);
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    if (user.id) {
      const response = await api.get(`/users/${user.id}`);

      setSheets(response.data.sheets);
    }

    setIsLoading(false);
  };

  return (
    <FichaContext.Provider
      value={{
        sheets,
        handleAddNewExercise,
        handleAddNewSheet,
        handleRemoveFicha,
        loadData,
        isLoading,
        handleRemoveExercise,
      }}
    >
      {children}
    </FichaContext.Provider>
  );
};

export const useSheet = () => {
  const {
    sheets,
    handleAddNewExercise,
    handleAddNewSheet,
    handleRemoveFicha,
    loadData,
    isLoading,
    handleRemoveExercise,
  } = useContext(FichaContext);
  return {
    sheets,
    handleAddNewExercise,
    handleAddNewSheet,
    handleRemoveFicha,
    loadData,
    isLoading,
    handleRemoveExercise,
  };
};
