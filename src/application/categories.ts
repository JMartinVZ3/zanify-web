import { useCategoriesStorage } from "../services/categoriesAdapter";
import { CategoriesStorageService } from "./ports";

export function useCategories() {

  const categoriesStorage:CategoriesStorageService = useCategoriesStorage();

  async function useGetCategories(userName: string, shopName: string) {

    console.log(userName);
    console.log(shopName);

    categoriesStorage.getCategories(userName, shopName);

  }

  return { useGetCategories };
}