import { useDispatch, useSelector } from "react-redux";
import { CategoriesStorageService } from "../application/ports";

import {
    GetCategories
} from "../features/category"


export function useCategoriesStorage(): CategoriesStorageService {
  const dispatch = useDispatch()

  return {
    categories: useSelector((state : any) => state.category.data),

    getCategories: (userName, shopName) => {
      dispatch<any>(GetCategories({userName: userName, shopName: shopName}))
    },
  }
}