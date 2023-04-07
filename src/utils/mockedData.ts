import { ITreino } from "../interfaces/index";
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

export const exercisesData: any = [
  {
    id: uuid.v4().toString(),
    TreinoId: data[0].id,
    name: "Supino Reto",
    description: "lorem isdadasdasdasdasd",
    weight: "20kg",
  },
  {
    id: uuid.v4().toString(),
    TreinoId: data[1].id,
    name: "Halteres",
    description: "lorem isdadasdasdasdasd",
  },
];
