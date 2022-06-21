import { useDispatch, useSelector } from "react-redux";
import { CategoriesStorageService } from "../application/ports";

import {
    GetCategories
} from "../features/category"


export function useCategoriesStorage(): CategoriesStorageService {
  const dispatch = useDispatch()

  return {
    categories: useSelector((state : any) => state.category.data),

    getCategories: () => {
      dispatch<any>(GetCategories({userName: "test1", shopName: "volva"}))
    },
  }
}