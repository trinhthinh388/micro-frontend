import { URL } from './config';

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const getProducts = async (limit: number = 20): Promise<Product[]> => {
  const result = await window.fetch(`${URL.product}?limit=${limit}`);
  const data = (await result.json()) as Product[];
  return data;
};
