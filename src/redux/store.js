import { configureStore } from '@reduxjs/toolkit';
import addReasonReducer from './addReason/reducer';
import changeInvestmentReducer from './changeInvestment/reducer';
import membersDataReducer from './membersData/reducer';
import applicationsDataReducer from './applicationData/reducer';

const store = configureStore({
  reducer: {
    addReason: addReasonReducer,
    investment: changeInvestmentReducer,
    applicationsData: applicationsDataReducer,
    membersData: membersDataReducer,
  },
});

export default store;
