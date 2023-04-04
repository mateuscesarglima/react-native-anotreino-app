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
