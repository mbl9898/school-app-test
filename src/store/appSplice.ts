import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StoreInitialState {
  name: String;
}

const initialState: StoreInitialState = {
  name: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<any>) {
      state.name = action.payload;
    },
  },
});
