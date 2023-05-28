import { configureStore } from '@reduxjs/toolkit';
import registerReasonReducer from './registerReducer';
import investmentReducer from './investmentReducer';
import clientsDataReducer from './clientsDataReducer';

const store = configureStore({
  reducer: {
    register: registerReasonReducer,
    investment: investmentReducer,
    clientsData: clientsDataReducer,
  },
});

export default store;