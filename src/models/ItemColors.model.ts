import { ItemColor } from './ItemColor.model';

export const cardsColors: ItemColor[] = [
  {
    name: 'purple',
    gradient: 'linear-gradient(90deg, #fff 0%, #f4efff 100%)',
    border: '3px solid #c5aafd',
  },
  {
    name: 'cyan',
    gradient: 'linear-gradient(90deg, #fff 0%, #E9F4FF 100%)',
    border: '3px solid #81c2ff',
  },
  {
    name: 'pink',
    gradient: 'linear-gradient(90deg, #fff 0%, #FFEFFB 100%)',
    border: '3px solid #ffa1ea',
  },
  {
    name: 'orange',
    gradient: 'linear-gradient(90deg, #fff 0%, #FFF2EA 100%)',
    border: '3px solid #ffb98c',
  },
];

export enum ItemColors {
  purple = 0,
  cyan = 1,
  pink = 2,
  orange = 3,
}
