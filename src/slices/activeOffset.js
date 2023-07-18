import {createSlice} from "@reduxjs/toolkit"

const activeOffset=createSlice({
    name:'offset',
    initialState:{
        offset:0
    },
    reducers:{
        setOffset:(state, action)=>{
            state.offset=action.payload
        }
    }
})

export const {setOffset}=activeOffset.actions;
export default activeOffset.reducer