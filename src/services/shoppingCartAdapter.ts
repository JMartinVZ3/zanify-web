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

    getShoppingCartProducts: (products) => dispatch(GetShoppingCartProducts(products)),
    addProduct: (product) => dispatch(AddProduct(product)),
    deleteProduct: (product) => dispatch(DeleteProduct(product)),
    quantityProduct: (product) => dispatch(QuantityProduct(product))
  }
}