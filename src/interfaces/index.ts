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
  videoId?: string;
  charge: ICharge[];
  note?: string;
}

export interface IActiveExercise {
  id: string;
  startDate: Date;
}

export interface ICharge {
  date: string;
  weight: number;
}

export interface ISheet {
  id: string;
  name: string;
  exercises: IExercise[];
}

export interface MedidasCorporais {
  peso: string;
  altura: string;
  braco_esq: string;
  braco_dir: string;
  abdomen: string;
  quadril: string;
  coxa_esq: string;
  coxa_dir: string;
  panturrilha_esq: string;
  panturrilha_dir: string;
  cintura: string;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  sheets: ISheet;
  info: MedidasCorporais;
}
