import { configureStore } from '@reduxjs/toolkit';
import litigationReducer from '../reducers/litigationReducer';

const store = configureStore({
    reducer: {litigations: litigationReducer}
})

export default store;