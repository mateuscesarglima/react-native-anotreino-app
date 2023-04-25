import { IExercise, IFicha } from "interfaces";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { ficha } from "../../utils/mockedData";

interface IFichaProviderProps {
  children: ReactNode;
}

interface IFichaContextProps {
  fichas: IFicha[];
  handleAddNewExercise: (newExercicio: IExercise, fichaId: string) => void;
  handleAddNewFicha: (newFicha: IFicha) => void;
  handleRemoveFicha: (fichaId: string) => void;
}

const FichaContext = createContext({} as IFichaContextProps);

export const FichaProvider = ({ children }: IFichaProviderProps) => {
  const [fichas, setFichas] = useState<IFicha[]>(ficha);
  const handleAddNewExercise = (newExercicio: IExercise, fichaId: string) => {
    setFichas((prevFichas) => {
      // Encontrar a ficha correspondente à fichaId e atualizar a propriedade "exercicios"
      const updatedFichas = prevFichas.map((ficha) => {
        if (ficha.id === fichaId) {
          return {
            ...ficha,
            exercicios: [...(ficha.exercicios || []), newExercicio],
          };
        }
        return ficha;
      });
      return updatedFichas;
    });
  };

  const handleAddNewFicha = (newFicha: IFicha) => {
    setFichas((prevFichas) => [...prevFichas, newFicha]);
  };

  const handleRemoveFicha = (fichaId: string) => {
    const updatedFichas = fichas.filter((ficha) => ficha.id !== fichaId);
    setFichas(updatedFichas);
  };

  return (
    <FichaContext.Provider
      value={{
        fichas,
        handleAddNewExercise,
        handleAddNewFicha,
        handleRemoveFicha,
      }}
    >
      {children}
    </FichaContext.Provider>
  );
};

export const useFicha = () => {
  const { fichas, handleAddNewExercise, handleAddNewFicha, handleRemoveFicha } =
    useContext(FichaContext);
  return { fichas, handleAddNewExercise, handleAddNewFicha, handleRemoveFicha };
};
