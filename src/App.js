import logo from './logo.svg';
import './App.css';
import Container from './container';
import PostContainer from './Postontainer/postContainer';
import SearchAppBar from './nevBar/nevBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/reducerSlices/postsSlice';
import { useEffect } from 'react';
import ImgPopUp from './popup/ImgPopUp';
import Popup from 'reactjs-popup';


function App() {
 const {page,baseUrl,srchKey}= useSelector(state=>state.posts)
  const dispatch = useDispatch();
  
  

  useEffect(() => {
    const url= baseUrl+page
    
    dispatch(fetchData(url));
  }, [srchKey]);
  return (
    <div className="App flex gap-2 flex-col">
      <SearchAppBar/>
    <PostContainer/>
    <ImgPopUp/>
    {/* <Popup open={true}>rgrgf</Popup> */}
    </div>
  );
}

export default App;
