import { useCategoriesStorage } from "../services/categoriesAdapter";
import { CategoriesStorageService } from "./ports";

export function useCategories() {

  const categoriesStorage:CategoriesStorageService = useCategoriesStorage();

  async function useGetCategories() {

    categoriesStorage.getCategories();

  }

  return { useGetCategories };
}