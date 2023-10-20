import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const client_id = "&client_id=SYTwPYm7xgaGbi2t5uvQoA8uZudNu2MtBjdSUYc0nt8"

const initialState={
    baseUrl:"https://api.unsplash.com/photos?",
    page:1,
    postData:[],
    isLoading:true,
    srchKey:"",
    queryReset:false,
}
export const fetchData = createAsyncThunk('data/fetchData', async (url) => {
    const response = await axios.get(url+client_id);
    if(Array.isArray(response.data))
        return response.data;
        if(typeof response.data==="object" && response.data !== null ){
            return response.data.results;
        }
  });

const postsSlice= createSlice({
    initialState,
    name:"posts",
    reducers: {
        searchSetter:(state,action)=>{
            state.isLoading=true;
            state.postData=[];
            state.page=1;
            state.baseUrl=`https://api.unsplash.com/search/photos?query=${action.payload}&`;
            state.queryReset=!state.queryReset;
            state.srchKey=action.payload

        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending, (state) => {
            state.isLoading=true
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading=false
            console.log(action.payload)
            state.postData.push(...action.payload)
            state.page=state.page+1;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.isLoading=false
          });
      },

})
export const { searchSetter } = postsSlice.actions;
export default postsSlice.reducer;