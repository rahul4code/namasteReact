import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItem:(state, action)=>{      
            state.cartItems.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.cartItems.splice(action.payload,1)
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;