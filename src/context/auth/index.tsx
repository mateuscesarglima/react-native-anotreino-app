import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@Services/api/api";
import { AxiosResponse } from "axios";
import { IUser, MedidasCorporais } from "interfaces";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

interface IAuthProviderProps {
  children: ReactNode;
}

interface ILoginProps {
  email: string;
  password: string;
}

interface IAuthContextProps {
  signIn: ({ email, password }: ILoginProps) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
  register: ({ email, password }: ILoginProps) => Promise<void>;
  user: IUser;
  loadData: () => Promise<any>;
  userKey: string;
  updateUserInfo: (data: MedidasCorporais) => void;
}

const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);

  const userKey = process.env.USER_KEY as string;

  const saveOnAsyncStorage = async (response: AxiosResponse) => {
    setIsLoading(true);
    try {
      const { data } = response;
      let user = {
        id: data[0].id,
        email: data[0].email,
        info: data[0].info,
      };

      await AsyncStorage.setItem(userKey, JSON.stringify(user));
      setIsAuthenticated(true);
    } catch (err) {
      Alert.alert("Não foi possível salvar os dados no storage", err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async ({ email, password }: ILoginProps) => {
    try {
      const response = await api.get(
        `/users/?email=${email}&password=${password}`
      );

      console.log(response);
      if (response) {
        saveOnAsyncStorage(response);
      }
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem(userKey);
      setIsAuthenticated(false);
    } catch (err) {
      Alert.alert(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async ({ email, password }: ILoginProps) => {
    try {
      await api.post("/user", {
        email,
        password,
      });
      Alert.alert("Conta registrada", "Clique em OK para prosseguir");
    } catch (err) {
      Alert.alert(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await AsyncStorage.getItem(userKey);
      if (response) {
        setUser(JSON.parse(response));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserInfo = async (data: MedidasCorporais) => {
    const payload = {
      info: data,
    };
    setUser({ ...user, info: data });

    await api.patch(`/users/${user.id}`, payload);

    // await api.get(`/user/${user.id}`);

    // const payload = {
    //   info: user.info,
    // };
    // payload.info = data;
    // try {
    //   const response = await api.patch(`/user/${user.id}`, payload);
    //   console.log(response.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log("TESTANDO", user);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isAuthenticated,
        isLoading,
        register,
        user,
        loadData,
        userKey,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    signIn,
    isAuthenticated,
    signOut,
    isLoading,
    register,
    user,
    loadData,
    userKey,
    updateUserInfo,
  } = useContext(AuthContext);
  return {
    signIn,
    isAuthenticated,
    signOut,
    isLoading,
    register,
    user,
    loadData,
    userKey,
    updateUserInfo,
  };
};
