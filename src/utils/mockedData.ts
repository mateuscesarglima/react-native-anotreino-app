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

export const exerciseCategoryData = [
  {
    peitoral: [
      {
        exercicio_id: uuid.v4().toString(),
        exercicio_nome: "Supino reto",
        exercicio_descricao: "",
      },
      {
        exercicio_id: uuid.v4().toString(),
        exercicio_nome: "Supino Inclinado com Halter",
        exercicio_descricao: "",
      },
      {
        exercicio_id: uuid.v4().toString(),
        exercicio_nome: "Supino Reto com Halter",
        exercicio_descricao: "",
      },
      {
        exercicio_id: uuid.v4().toString(),
        exercicio_nome: "Crucifixo Polia",
        exercicio_descricao: "",
      },
    ],
    costas: [
      {
        exercicio_id: "Puxada Polia Barra Frente",
        exercicio_nome: "",
        exercicio_descricao: "",
      },
    ],
    biceps: [
      {
        exercicio_id: "",
        exercicio_nome: "",
        exercicio_descricao: "",
      },
    ],
    ombros: [
      {
        exercicio_id: "",
        exercicio_nome: "",
        exercicio_descricao: "",
      },
    ],
    abdômem: [
      {
        exercicio_id: "",
        exercicio_nome: "",
        exercicio_descricao: "",
      },
    ],
    triceps: [
      {
        exercicio_id: "",
        exercicio_nome: "",
        exercicio_descricao: "",
      },
    ],
    pernas: [
      {
        exercicio_id: "",
        exercicio_nome: "",
        exercicio_descricao: "",
      },
    ],
    antebracos: [
      {
        exercicio_id: "",
        exercicio_nome: "",
        exercicio_descricao: "",
      },
    ],
  },
];
