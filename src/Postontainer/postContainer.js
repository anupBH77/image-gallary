import { useEffect, useState } from "react";
import Spinner from "../spinner";
import { getPosts } from "../api/getPosts";
import PostCard from "./postCard";
import { fetchData } from "../store/reducerSlices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadMore from "./loadMore";
import { Typography } from "@mui/material";
function PostContainer() {
    const dispatch= useDispatch();
  const { postData, page, isLoading ,baseUrl,srchKey} = useSelector((state) => state.posts);
  console.log(page, postData,baseUrl);
  const loadMoreHandler = () => {
    const url= baseUrl+"page="+page;
   
    console.log(url,page)

    dispatch(fetchData(url));
  };
 
  return (
    <div className=" min-h-screen mt-20 flex items-center justify-around">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
            
            {srchKey.length>0 &&<Typography  level="h1" fontFamily={"revert"} textAlign={"center"} fontSize={"15px"}>Showing results for '{srchKey}'</Typography>
}
        
          <div className="m-auto flex flex-wrap gap-2  justify-center  ">
    
            {postData.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          {postData.length>0 &&<LoadMore onClick={loadMoreHandler} />
}
        </div>
      )}
    </div>
  );
}
export default PostContainer;
