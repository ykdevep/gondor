export type DateTime = Date | string;

export interface ExerciseData {
  id?: string;
  initAt?: DateTime;
  finalAt?: DateTime;
  result?: Result[];
  level?: number;
  hit?: number;
  fault?: number;
  omit?: number;
  error?: number;
  point?: number;
}

export interface Result {
  question: string;
  response: string;
}
