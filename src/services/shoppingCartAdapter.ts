import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartStorageService } from "../application/ports";

import {
  GetShoppingCartProducts,
  AddProduct,
  DeleteProduct,
  QuantityProduct
} from "../features/shoppingCart"


export function useShoppingCartStorage(): ShoppingCartStorageService {
  const dispatch = useDispatch()


  return {
    shoppingCart: useSelector((state : any) => state.shoppingCart.data),

    getShoppingCartProducts: () => dispatch(GetShoppingCartProducts),
    addProduct: () => dispatch(AddProduct),
    deleteProduct: () => dispatch(DeleteProduct),
    quantityProduct: () => dispatch(QuantityProduct)
  }
}