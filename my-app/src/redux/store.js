import { configureStore } from '@reduxjs/toolkit';

import  userReducer  from './checkoutSlice';

export default configureStore({
    reducer: {
        user: userReducer,
    }
});