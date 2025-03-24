import {createSlice} from "@reduxjs/toolkit"


interface CartState{
    cartProducts: string[];
    cartCount: number;
    
}
const initialState: CartState={
    cartProducts:[],
    cartCount:24,
}
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct:(state, { payload }) => {
            state.cartProducts.push(payload);
        },
        removeProduct:(state,{payload})=>{
            state.cartProducts = state.cartProducts.filter(product => product !== payload);
        },
        setProducts: (state,{payload}) => {
            state.cartProducts = payload;
        }
    }
});
export const{addProduct,removeProduct,setProducts}=cartSlice.actions;
