import { IExercise, IFicha } from "interfaces";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ficha } from "../../utils/mockedData";

interface IFichaProviderProps {
  children: ReactNode;
}

interface IFichaContextProps {
  fichas: IFicha[];
  handleAddNewExercise: (newExercicio: IExercise, fichaId: string) => void;
  handleAddNewFicha: (newFicha: IFicha) => void;
}

const FichaContext = createContext({} as IFichaContextProps);

export const FichaProvider = ({ children }: IFichaProviderProps) => {
  const [fichas, setFichas] = useState<IFicha[]>(ficha);

  useEffect(() => {}, [fichas]);

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

  useEffect(() => {}, [fichas]);

  return (
    <FichaContext.Provider
      value={{ fichas, handleAddNewExercise, handleAddNewFicha }}
    >
      {children}
    </FichaContext.Provider>
  );
};

export const useFicha = () => {
  const { fichas, handleAddNewExercise, handleAddNewFicha } =
    useContext(FichaContext);
  return { fichas, handleAddNewExercise, handleAddNewFicha };
};
