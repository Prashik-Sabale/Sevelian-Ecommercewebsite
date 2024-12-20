import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: ...
        // name: "toggle",
        // initialState: false,
        // open: (state) => {
        //     // state.isOpen = !state.isOpen;
        //     return !state;
        // }
    }
})
