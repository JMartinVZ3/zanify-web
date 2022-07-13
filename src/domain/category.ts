import { Product } from "./product";

export type CategoryTitle = string;
export type ShopId = string;

export type Category = {
    _id: String;
    title: CategoryTitle;
    shop: ShopId;
    products: Product[];
};

