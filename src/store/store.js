import { configureStore } from '@reduxjs/toolkit';
import lawyerReducer from '../reducers/lawyerReducer';
import litigationReducer from '../reducers/litigationReducer';

const store = configureStore({
    reducer: {
        lawyer: lawyerReducer,
        litigation: litigationReducer
    }
    
})

export default store;