import { createSlice } from "@reduxjs/toolkit"

const initialState={
    
    isOpen:false,
    postData:null
}
const imgPopUpSlice= createSlice({
    initialState,
    name:"imgPopUp",
    reducers:{
        setPopUpData:(state,action)=>{
            state.postData= action.payload;
            state.isOpen=true;

        },
        closePopUp:(state)=>{
            state.isOpen= false;
        }
    }
})
export const {setPopUpData,closePopUp}= imgPopUpSlice.actions;
export default imgPopUpSlice.reducer;