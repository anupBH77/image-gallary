import { configureStore } from '@reduxjs/toolkit';

import postsSlice from './reducerSlices/postsSlice';
import popUpSlice from './reducerSlices/popUpSlice';

const store = configureStore({
  reducer: {
    posts:postsSlice,
    imgPopUp:popUpSlice,
  },
});

export default store;