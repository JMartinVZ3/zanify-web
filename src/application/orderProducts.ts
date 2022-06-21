import { ShoppingCart } from "../domain/shoppingCart";
import { createOrder } from "../domain/order";

import { useShoppingCartStorage } from "../services/storageAdapter";

export function useOrderProducts() {

  const shoppingCartStorage = useShoppingCartStorage();

  async function orderProducts(shoppingCart: ShoppingCart) {
    const order = createOrder(4.5);

    shoppingCartStorage.emptyCart();
  }

  return { orderProducts };
}