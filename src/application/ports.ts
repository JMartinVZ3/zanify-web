import { Category } from "../domain/category"
import { Product } from "../domain/product";

export interface ShoppingCartStorageService {
  shoppingCart: Product[];
  getShoppingCartProducts(categories: Category[]): void;
  addProduct(product: Product): void;
  deleteProduct(product: Product): void;
  quantityProduct(product: Product): void;
}

export interface CategoriesStorageService {
  categories: Category[];
  getCategories(userName: string, shopName: string): void;
}
