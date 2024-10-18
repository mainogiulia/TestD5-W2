import { iTask } from './i-task';

export interface iUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  todo?: iTask[];
}
