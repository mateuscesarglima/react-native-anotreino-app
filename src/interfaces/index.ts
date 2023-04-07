export interface ITreino {
  id: string;
  title: string;
}

export interface IExercise {
  id: string;
  TreinoId: string;
  name: string;
  description: string;
}
