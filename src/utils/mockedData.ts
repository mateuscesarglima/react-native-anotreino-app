import { IExercise, IExerciseCategory, ITreino } from "../interfaces/index";
import uuid from "react-native-uuid";

export const data: ITreino[] = [
  {
    id: uuid.v4().toString(),
    title: "Costas",
  },
  {
    id: uuid.v4().toString(),
    title: "Pernas",
  },
  {
    id: uuid.v4().toString(),
    title: "Peito",
  },
];

export const exercisesData: IExercise[] = [
  {
    id: uuid.v4().toString(),
    TreinoId: data[0].id,
    name: "Supino Reto",
    description: "lorem isdadasdasdasdasd",
  },
  {
    id: uuid.v4().toString(),
    TreinoId: data[1].id,
    name: "Halteres",
    description: "lorem isdadasdasdasdasd",
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
