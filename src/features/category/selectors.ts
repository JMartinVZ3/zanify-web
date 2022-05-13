import { RootState } from "../../store";
import { createSelector } from '@reduxjs/toolkit';

export const selectCategory = (state: RootState) => state.category.data

export const categorySelector = createSelector(
  selectCategory,
  state => state
)