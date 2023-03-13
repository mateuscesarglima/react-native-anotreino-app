// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAd0cYvolX23m6b5JikMD7e6vUp6wv1ngI",
  authDomain: "anotreinoapp.firebaseapp.com",
  projectId: "anotreinoapp",
  storageBucket: "anotreinoapp.appspot.com",
  messagingSenderId: "713979397223",
  appId: "1:713979397223:web:fc957917613c863cb600c2",
  measurementId: "G-7ESZPCLMBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
