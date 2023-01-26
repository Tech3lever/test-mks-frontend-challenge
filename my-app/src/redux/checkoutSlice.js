import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: 0,
        buy: false,
    },
    reducers: {
        comprarProduto(state, { payload }) {
            return { ...state, buy: true, name: 'payload' }
        },
        removerProduto(state) {
            return { ...state, buy: false, name: '' }
        }
    }
});

export const { comprarProduto, removerProduto } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;

