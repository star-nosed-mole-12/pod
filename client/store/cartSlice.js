import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    checkout : [],
    total : 0,
    totalPrice : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        add : (state, action) => {
            state.checkout = [...state.checkout];
            state.checkout.push(action.payload.name);
            state.total += action.payload.price;

        }
    },
});

export const {add} = cartSlice.actions;

export default cartSlice.reducer;