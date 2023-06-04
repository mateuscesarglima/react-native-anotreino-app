import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { IExercise } from "@Interfaces/index";

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContext {
  seconds: number;
  activeExercise: IExercise;
  totalTimeInSeconds: number;
  setActiveExercise: Dispatch<SetStateAction<IExercise>>;
}

const countdownContext = createContext({} as CountdownContext);

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const [activeExercise, setActiveExercise] = useState({} as IExercise);
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(30);
  const [seconds, setSeconds] = useState(totalTimeInSeconds / 60);

  return (
    <countdownContext.Provider
      value={{ activeExercise, seconds, setActiveExercise, totalTimeInSeconds }}
    ></countdownContext.Provider>
  );
};

export const UseCountdown = () => {
  const { activeExercise, seconds, setActiveExercise, totalTimeInSeconds } =
    useContext(countdownContext);
  return {
    activeExercise,
    seconds,
    setActiveExercise,
    totalTimeInSeconds,
  };
};
