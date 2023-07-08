import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    // setFilterContact(state, { payload }) {
      // return state = payload;
    setFilterContact(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;