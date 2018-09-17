import { Exercise } from '@app/core/model/exercise.model';

export interface Section {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
}
