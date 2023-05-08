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
    sheetName: string
  ) => Promise<any>;
  handleAddNewSheet: any;
  handleRemoveFicha: any;
  // handleAddNewExercise: (newExercicio: IExercise, fichaId: string) => void;
  // handleAddNewFicha: (newFicha: ISheet) => void;
  // handleRemoveFicha: (fichaId: string) => void;
}

const FichaContext = createContext({} as IFichaContextProps);

export const FichaProvider = ({ children }: IFichaProviderProps) => {
  const [sheets, setSheets] = useState<ISheet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
    sheetName: string
  ) => {
    try {
      const data = sheets.map((sheet) =>
        sheet.name === sheetName ? sheet.exercises.push(newExercise) : sheet
      );
      const payload = {
        sheets: data,
      };
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

  const sheetsKey = process.env.SHEETS_KEY as string;

  const loadData = async () => {
    const response = await AsyncStorage.getItem(sheetsKey);
    const data: ISheet[] = response ? JSON.parse(response) : [];
    setSheets(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <FichaContext.Provider
      value={{
        sheets,
        handleAddNewExercise,
        handleAddNewSheet,
        handleRemoveFicha,
      }}
    >
      {children}
    </FichaContext.Provider>
  );
};

export const useSheet = () => {
  const { sheets, handleAddNewExercise, handleAddNewSheet, handleRemoveFicha } =
    useContext(FichaContext);
  return { sheets, handleAddNewExercise, handleAddNewSheet, handleRemoveFicha };
};
