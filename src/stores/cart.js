import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    items: [],
    statusTab: false,
    isOpen: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;

            // if is already in the cart or not
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);
        },

        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = (state.items).filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state) {
            if (state.statusTab === false) {
                state.statusTab = true;
            } else {
                state.statusTab = false;
            }
        },
        openTab: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})
export const { addToCart, changeQuantity, toggleStatusTab, removeFromCart, openTab } = cartSlice.actions;
export default cartSlice.reducer;