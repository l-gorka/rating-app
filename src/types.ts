export interface CategoryOverview {
  id: number;
  title: string;
  image: string;
}

export interface Item {
  id: number;
  title: string;
  image: string;
  rating: number;
  text: string;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  items: Item[];
}

const colors = ['default', 'secondary', 'success', 'warning', 'danger'] as const;

export type Color = typeof colors[number];

export interface SliderConfig {
  title: string;
  color: Color;
  value: number;
}