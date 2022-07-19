const { createSlice } = require("@reduxjs/toolkit");

const initialUISlice = {
  cartIsVisible: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUISlice,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
