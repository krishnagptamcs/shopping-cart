import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    add: (state, action) => {

      // here state= initail value i.e empty array and action.payload is input paramater passed in add reducer function i.e "post"
      state.push(action.payload);
    },

    remove: (state, action) => {
          // here state= initail value i.e an empty array and action.payload is input paramater passed in add reducer function i.e "post"
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
