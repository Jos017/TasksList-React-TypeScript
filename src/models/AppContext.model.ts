import { List } from './List.model';

export interface AppContext {
  loading?: boolean;
  error?: boolean;
  totalTasks?: number;
  completedTasks?: number;
  searchValue?: string;
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  searchedTasks?: List[];
  completeTask?: (text: string) => void;
  postponeTask?: (text: string) => void;
  deleteTask?: (text: string) => void;
  addTask?: (text: string) => void;
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  textModalValue?: string;
  setTextModalValue?: React.Dispatch<React.SetStateAction<string>>;
  modalAction?: 'continue' | 'delete';
  setModalAction?: React.Dispatch<React.SetStateAction<'continue' | 'delete'>>;
}
