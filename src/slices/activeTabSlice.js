import {createSlice} from "@reduxjs/toolkit"

const activeSliceTab=createSlice({
    name:'activeTab',
    initialState:{
        activeTab:"RELEVANCE"
    },
    reducers:{
        setActiveTab:(state, action)=>{
            state.activeTab=action.payload
        }
    }
})

export const {setActiveTab}=activeSliceTab.actions;
export default activeSliceTab.reducer