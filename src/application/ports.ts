import { Category } from "../domain/category"
import { Product } from "../domain/product";

export interface ShoppingCartStorageService {
  shoppingCart: Product[];
  getShoppingCartProducts(): void;
  addProduct(): void;
  deleteProduct(): void;
  quantityProduct(): void;
}

export interface CategoriesStorageService {
  categories: Category[];
  getCategories(): void;
}
