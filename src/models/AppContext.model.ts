import { Props } from './Props.model';
import { List } from './List.model';

export interface AppContext extends Props {
  loading: boolean;
  error: boolean;
  totalTasks: number;
  completedTasks: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTasks: List[];
  completeTask: (text: string) => void;
  postponeTask: (text: string) => void;
  deleteTask: (text: string) => void;
  addTask: (text: string) => void;
}
