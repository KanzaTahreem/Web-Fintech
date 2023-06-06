export const SET_SELECTED_ITEM = 'investChange/SET_SELECTED_ITEM';
export const SET_UPLOADED_FILES = 'investChange/SET_UPLOADED_FILES';
export const REMOVE_UPLOADED_FILE = 'investChange/REMOVE_UPLOADED_FILE';

export const setSelectedItem = (item) => {
  return {
    type: SET_SELECTED_ITEM,
    payload: item,
  };
};

export const setUploadedFiles = (files) => {
  return {
    type: SET_UPLOADED_FILES,
    payload: files,
  };
};

export const removeUploadedFile = (fileIndex) => {
  return {
    type: REMOVE_UPLOADED_FILE,
    payload: fileIndex,
  };
};

const initialState = {
  selectedItem: null,
  uploadedFiles: [],
};

const investmentReducer = (state = initialState, action) => {
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

export default investmentReducer;