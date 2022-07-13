import { ShoppingCartStorageService } from "./ports";
import { useShoppingCartStorage } from "../services/shoppingCartAdapter";

import { Product } from "../domain/product";
import { Category } from "../domain/category";

export function useShoppingCart() {
  const shoppingCarStorageService: ShoppingCartStorageService = useShoppingCartStorage();

  async function useGetShoppingCartProducts(categories: Category[]) {

    shoppingCarStorageService.getShoppingCartProducts(categories);

  };

  async function useAddProduct(product: Product) {

    shoppingCarStorageService.addProduct(product);

  };

  async function useDeleteProduct(product: Product) {

    shoppingCarStorageService.deleteProduct(product);

  };

  async function useQuantityProduct(product: Product) {

    shoppingCarStorageService.quantityProduct(product);

  };

  return { 
    useGetShoppingCartProducts, 
    useAddProduct, 
    useDeleteProduct,
    useQuantityProduct,
  };
}