import { RcFile } from "antd/es/upload";

export type TCarouselImage = {
  _id: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type TBook = {
  _id: string;
  title: string;
  author: string;
  price: string;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
  qty?: number;
  reviews: string[];
  image: string | { file: RcFile };
};
