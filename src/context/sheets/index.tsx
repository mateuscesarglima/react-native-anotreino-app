import { useAuth } from "@Context/auth";
import { api } from "@Services/api/api";
import { ICharge, IExercise, ISheet } from "interfaces";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

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
  handleUpdateCharge: (
    exerciseId: string,
    sheetId: string,
    newCharge: ICharge
  ) => Promise<void>;
  getCharge: (exerciseId: string, sheetId: string) => Promise<ICharge[]>;
  getNote: (exerciseId: string) => Promise<string | undefined>;
  updateNote: (exerciseId: string, newNote: string) => Promise<void>;
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

  const handleUpdateCharge = async (
    exerciseId: string,
    sheetId: string,
    newCharge: ICharge
  ) => {
    try {
      let payload = {
        sheets: sheets,
      };
      const sheetIndex = sheets.findIndex((sheet) => sheet.id === sheetId);

      const exerciseIndex = sheets[sheetIndex].exercises.findIndex(
        (exercise) => exercise.id === exerciseId
      );

      payload.sheets[sheetIndex].exercises[exerciseIndex].charge.push(
        newCharge
      );

      const response = await api.patch(`/users/${user.id}`, payload);
      setSheets(response.data.sheets);
      Toast.show({
        type: "success",
        text1: "Aviso",
        text2: "Carga atualizada com sucesso!",
        visibilityTime: 1500,
      });
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  const handleRemoveFicha = async (sheetId: string) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveExercise = async (
    exerciseObj: IExercise,
    sheetObj: ISheet
  ) => {
    try {
      setIsLoading(true);
      const payload = {
        sheets: sheets,
      };
      const sheetIndex = sheets.findIndex(
        (sheet) => sheet.name === sheetObj.name
      );
      const exerciseIndex = sheets[sheetIndex].exercises.findIndex(
        (exercise) => exercise.name === exerciseObj.name
      );
      console.log(
        payload.sheets[sheetIndex].exercises.splice(exerciseIndex, 1)
      );
      if (exerciseIndex) {
        payload.sheets[sheetIndex].exercises.splice(exerciseIndex, 1);
      }

      const response = await api.patch(`/users/${user.id}`, payload);
      setSheets(response.data.sheets);
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: "Exercicio removido com sucesso!",
      });
    } catch (err) {
      Alert.alert(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const getCharge = async (exerciseId: string, sheetId: string) => {
    try {
      const response = await api.get(`/users/${user.id}`);
      const sheet = response.data.sheets.find(
        (sheet: ISheet) => sheet.id === sheetId
      );
      const exercise = sheet.exercises.find(
        (exercise: IExercise) => exercise.id === exerciseId
      );
      return exercise.charge;
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (user.id) {
        const response = await api.get(`/users/${user.id}`);
        setSheets(response.data.sheets);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getNote = async (exerciseId: string) => {
    const response = await api.get(`/users/${user.id}`);
    const sheets = response.data.sheets as ISheet[];
    const sheet = sheets.find((sheet) =>
      sheet.exercises.find((exercise) => exercise.id === exerciseId)
    );
    const exercise = sheet?.exercises.find(
      (exercise) => exercise.id === exerciseId
    );
    return exercise?.note;
  };

  const updateNote = async (exerciseId: string, newNote: string) => {
    const payload = {
      sheets: sheets,
    };
    const sheetIndex = sheets.findIndex((sheet) =>
      sheet.exercises.find((exercise) => exercise.id === exerciseId)
    );
    const exerciseIndex = sheets[sheetIndex].exercises.findIndex(
      (exercise) => exercise.id === exerciseId
    );

    console.log(payload.sheets[sheetIndex].exercises[exerciseIndex].note);

    payload.sheets[sheetIndex].exercises[exerciseIndex].note = newNote;

    console.log(payload);

    const response = await api.patch(`/users/${user.id}`, payload);

    setSheets(response.data.sheets);
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
        loadData,
        isLoading,
        handleRemoveExercise,
        handleUpdateCharge,
        getCharge,
        getNote,
        updateNote,
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
    handleUpdateCharge,
    getCharge,
    getNote,
    updateNote,
  } = useContext(FichaContext);
  return {
    sheets,
    handleAddNewExercise,
    handleAddNewSheet,
    handleRemoveFicha,
    loadData,
    isLoading,
    handleRemoveExercise,
    handleUpdateCharge,
    getCharge,
    getNote,
    updateNote,
  };
};
