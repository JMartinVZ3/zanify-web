export type ProductTitle = string;
export type CategoryId = string;

export type Product = {
  id: string;
  title: ProductTitle;
  description: string;
  price: number;
  category: CategoryId;
  images_url: any;
  quantity?: number;
};
