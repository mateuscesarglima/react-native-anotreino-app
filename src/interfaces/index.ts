export interface IFicha {
  id: string;
  title: string;
  exercicios: IExercise[];
}

// export interface IExercise {
//   id: string;
//   TreinoId: string;
//   name: string;
//   description: string;
// }

export interface IExerciseCategory {
  key: string;
  label: string;
}

export interface IExerciseType {
  peito: IExercise[];
  ombros: IExercise[];
  triceps: IExercise[];
  biceps: IExercise[];
  costas: IExercise[];
  pernas: IExercise[];
  abdomem: IExercise[];
}

export interface IExercise {
  id: string;
  name: string;
  description: string;
}
