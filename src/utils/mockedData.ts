import uuid from "react-native-uuid";
import { IExerciseCategory, IExerciseType, IFicha } from "../interfaces/index";

export const ficha: IFicha[] = [
  {
    id: uuid.v4().toString(),
    title: "Ficha A",
    exercicios: [
      {
        id: uuid.v4().toString(),
        name: "Tríceps Polia Barra V",
        description:
          "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
      },
    ],
  },
  {
    id: uuid.v4().toString(),
    title: "Ficha B",
    exercicios: [],
  },
  {
    id: uuid.v4().toString(),
    title: "Ficha C",
    exercicios: [],
  },
];

export const exerciseCategory: IExerciseCategory[] = [
  {
    key: "peitoral",
    label: "Peitoral",
  },
  {
    key: "costas",
    label: "Costas",
  },
  {
    key: "biceps",
    label: "Bíceps",
  },
  {
    key: "ombros",
    label: "Ombros",
  },
  {
    key: "abdomen",
    label: "Abdômen",
  },
  {
    key: "triceps",
    label: "Tríceps",
  },
  {
    key: "pernas",
    label: "Pernas",
  },
  {
    key: "antebraços",
    label: "Antebraços",
  },
];

export type IExerciseCategoryData = typeof exerciseCategoryData;

export const exerciseCategoryData: IExerciseType = {
  peito: [
    {
      id: uuid.v4().toString(),
      name: "Supino reto",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
    {
      id: uuid.v4().toString(),
      name: "Supino Inclinado c/ Halter",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
    {
      id: uuid.v4().toString(),
      name: "Supino Reto c/ Halter",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
    {
      id: uuid.v4().toString(),
      name: "Crucifixo Polia",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
  ],
  costas: [
    {
      id: uuid.v4().toString(),
      name: "Puxada Polia",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
  ],
  biceps: [
    {
      id: uuid.v4().toString(),
      name: "",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
  ],
  ombros: [
    {
      id: uuid.v4().toString(),
      name: "",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
  ],
  abdomem: [
    {
      id: uuid.v4().toString(),
      name: "",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
  ],
  triceps: [
    {
      id: uuid.v4().toString(),
      name: "Tríceps Polia Barra V",
      description:
        "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Polia Francês Corda",
      description:
        "O Tríceps Francês com Halteres é um exercício eficaz para desenvolver os músculos do tríceps. Ele é feito com halteres e ajuda a fortalecer e definir a parte de trás dos braços.",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Pulley Corda",
      description:
        "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
    },
  ],
  pernas: [
    {
      id: uuid.v4().toString(),
      name: "",
      description: "Lorem ipsum dolor, sit amet consectetur",
    },
  ],
};
