import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getRestaurantsURL } from "../utils/getRestaurantsURL";

export const fetchRestaurantList=createAsyncThunk('app/getRestaurants', async()=>{
    const response=await axios.get(getRestaurantsURL("RELEVANCE",0))
    const resList=await response.data;
    return resList?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
})


const restaurantList=createSlice({
    name:'restaurantList',
    initialState:{
        restaurantList:[]
    },
    reducers:{  
        updateRestaurantList:(state, action)=>{
            state.restaurantList=action.payload;
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchRestaurantList.pending,(state, action)=>{
            state.restaurantList=["No Element"];
        })
        builder.addCase(fetchRestaurantList.fulfilled,(state, action)=>{
            state.restaurantList=action.payload;
        })
    }
})

export const {updateRestaurantList} = restaurantList.actions
export default restaurantList.reducer