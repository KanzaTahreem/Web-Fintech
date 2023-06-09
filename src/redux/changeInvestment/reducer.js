
import {
  SET_SELECTED_ITEM,
  SET_UPLOADED_FILES,
  REMOVE_UPLOADED_FILE
} from './actions';

const initialState = {
  selectedItem: null,
  uploadedFiles: [],
};

const changeInvestmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case SET_UPLOADED_FILES:
      return {
        ...state,
        uploadedFiles: action.payload,
      };
    case REMOVE_UPLOADED_FILE:
      const fileIndex = action.payload;
      return {
        ...state,
        uploadedFiles: state.uploadedFiles.filter((_f, index) => index !== fileIndex),
      };
    default:
      return state;
  }
};

export default changeInvestmentReducer;