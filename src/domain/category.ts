import { Product } from "./product";

export type CategoryTitle = string;
export type ShopId = string;

export type Category = {
    id: String;
    title: CategoryTitle;
    shop: ShopId;
    products: Product[];
};

