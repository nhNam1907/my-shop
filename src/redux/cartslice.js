import { createSlice } from "@reduxjs/toolkit";


const cart = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: cart,
    reducers: {
        addCart: (state, action) => {
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                return state.map(x => x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x)

            } else {
                state.push({
                    ...action.payload,
                    qty: 1
                })
            }
        },
        deleteCart: (state, action) => {
            const exist1 = state.find(x => x.id === action.payload.id);
            if (exist1.qty === 1) {
                return state.filter(x => x.id !== exist1.id)
            } else {
                return state.map(x => x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x)
            }
        }
    }
})

export const { addCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;