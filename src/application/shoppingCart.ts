import { ShoppingCartStorageService } from "./ports";
import { useShoppingCartStorage } from "../services/shoppingCartAdapter";

export function useShoppingCart() {
  const shoppingCarStorageService: ShoppingCartStorageService = useShoppingCartStorage();

  async function useGetShoppingCartProducts() {

    shoppingCarStorageService.getShoppingCartProducts();

  };

  async function useAddProduct() {

    shoppingCarStorageService.addProduct();

  };

  async function useDeleteProduct() {

    shoppingCarStorageService.deleteProduct();

  };

  async function useQuantityProduct() {

    shoppingCarStorageService.quantityProduct();

  };

  return { 
    useGetShoppingCartProducts, 
    useAddProduct, 
    useDeleteProduct,
    useQuantityProduct,
  };
}