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