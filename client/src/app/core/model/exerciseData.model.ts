import { User } from '@app/core/model/user.model';

export type DateTime = Date | string;

export interface ExerciseData {
  id?: string;
  initAt?: DateTime;
  finalAt?: DateTime;
  createdBy: User;
  result?: Result[];
  level?: number;
  hit?: number;
  fault?: number;
  omit?: number;
  error?: number;
  point?: number;
  score?: number;
}

export interface Result {
  question: string;
  response: string;
}
