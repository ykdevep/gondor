export type DateTime = Date | string;

export interface ExerciseData {
  id?: string;
  initAt?: DateTime;
  finalAt?: DateTime;
  question?: string;
  response?: string;
  level?: number;
  hit?: number;
  fault?: number;
  omit?: number;
  error?: number;
  point?: number;
}
