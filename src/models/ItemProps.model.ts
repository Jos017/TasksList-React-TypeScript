import { Props } from './Props.model';
import { ItemColors } from './ItemColors.model';

export interface ItemProps extends Props {
  itemColor?: 'random' | ItemColors;
  text: string;
  completed: boolean;
}
