import { configureStore } from '@reduxjs/toolkit';
import registerReasonReducer from './registerReducer';
import investmentReducer from './investmentReducer';
import membersDataReducer from './membersDataReducer';
import applicationsDataReducer from './applicationsDataReducer';

const store = configureStore({
  reducer: {
    register: registerReasonReducer,
    investment: investmentReducer,
    applicationsData: applicationsDataReducer,
    membersData: membersDataReducer
  },
});

export default store;