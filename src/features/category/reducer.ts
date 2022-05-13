import { createReducer } from '@reduxjs/toolkit';
import { getCategories } from './actions';

type CategoryState = {
  data: Array<any>;
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
    .addCase(getCategories.pending, state => {
      state.pending = true;
    })
    .addCase(getCategories.fulfilled, (state, { payload }) => {
      state.pending = false;
      console.log(state.data);
      console.log("this is the state");
      state.data = payload;
      console.log(state.data);
    })
    .addCase(getCategories.rejected, state => {
      state.pending = false;
      state.error = true;
    });
});
