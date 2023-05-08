import { Alert } from "react-native";
import { api } from "./api";
import { ISheet, IUser } from "@Interfaces/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getCurrentUser = async () => {
  const response = await AsyncStorage.getItem(process.env.USER_KEY as string);
  const user: IUser = JSON.parse(response ? response : "{}");
  return user.id;
};

export const getSheetById = async (id: string): Promise<any> => {
  try {
    const response = await api.get(`/sheets/${id}`);
    return response.data;
  } catch (err) {
    Alert.alert(err as string);
  }
};

export const addNewSheet = async (newSheet: ISheet) => {};
