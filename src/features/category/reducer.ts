import { createReducer } from '@reduxjs/toolkit';
import { Category } from '../../domain/category';
import { GetCategories } from './actions';

type CategoryState = {
  data: Array<Category>;
  pending: boolean;
  error: boolean;
};

const initialState: CategoryState = {
  data: [],
  pending: false,
  error: false,
};

export const categoryReducer = createReducer(initialState, builder => {
  builder
    .addCase(GetCategories.pending, state => {
      state.pending = true;
    })
    .addCase(GetCategories.fulfilled, (state, { payload }) => {
      state.pending = false;
      console.log(state.data);
      console.log("this is the state");
      state.data = payload;
      console.log(state.data);
    })
    .addCase(GetCategories.rejected, state => {
      state.pending = false;
      state.error = true;
    });
});
