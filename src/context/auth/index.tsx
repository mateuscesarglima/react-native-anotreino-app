import { signInWithEmailAndPassword } from "firebase/auth";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import { auth } from "../../config/firebase";
import { FirebaseError } from "@firebase/util";

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
}

const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setIsAuthenticated(!!user));
  }, []);

  const signIn = async ({ email, password }: ILoginProps) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        setIsLoading(false);
      })
      .catch((err: FirebaseError) => {
        setIsLoading(false);
        if (
          err.code === "auth/invalid-email" ||
          err.code === "auth/wrong-password"
        ) {
          Alert.alert("Email ou senha inválidos");
        }
      });
  };

  const signOut = async () => {
    await auth
      .signOut()
      .then(() => {
        Alert.alert("Logout realizado com sucesso");
      })
      .catch((err) => console.log(err));
  };

  const register = () => {};

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { signIn, isAuthenticated, signOut, isLoading } =
    useContext(AuthContext);
  return { signIn, isAuthenticated, signOut, isLoading };
};
