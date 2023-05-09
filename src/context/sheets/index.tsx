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
      await api.patch(`/users/${user.id}`, payload);
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  const handleAddNewExercise = async (
    newExercise: IExercise,
    sheetTmp: ISheet
  ) => {
    try {
      const payload = {
        sheets: sheets,
      };
      payload.sheets.map((sheet) =>
        sheet.id === sheetTmp.id ? sheet.exercises.push(newExercise) : sheet
      );
      await api.patch(`/users/${user.id}`, payload);
    } catch (err) {
      Alert.alert(err as string);
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
      await api.patch(`/users/${user.id}`, payload);
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    if (user.id) {
      const response = await api.get(`/users/${user.id}`);
      console.log(response.data);
      setSheets(response.data.sheets);
    }
    console.log("LOAD DATA");
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
  } = useContext(FichaContext);
  return {
    sheets,
    handleAddNewExercise,
    handleAddNewSheet,
    handleRemoveFicha,
    loadData,
    isLoading,
  };
};
