export const TOGGLE_CHECKBOX = 'registerReason/TOGGLE_CHECKBOX';
export const UPDATE_TEXTAREA = 'registerReason/UPDATE_TEXTAREA';
export const RESET_REGISTER_MODAL = 'registerReason/RESET_REGISTER_MODAL';

export const toggleCheckbox = (label) => ({
  type: TOGGLE_CHECKBOX,
  payload: label,
});

export const resetRegisterModal = () => ({
  type: RESET_REGISTER_MODAL
});

export const updateTextarea = (value) => ({
  type: UPDATE_TEXTAREA,
  payload: value,
});


const initialState = {
  checkboxes: {
    '서류 식별 불가': false,
    '필수 서류 누락': false,
    '서류의 내용이 등록된 회원정보와 다름': false,
    '서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)': false,
    '서류의 유효기간이 초과됨': false,
    '직접 입력': false,
  },
  textarea: '',
};

const registerReasonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      const { payload: label } = action;
      const checkboxes = {};

      // Set the clicked checkbox to true, and others to false
      Object.keys(state.checkboxes).forEach((key) => {
        checkboxes[key] = key === label;
      });

      return { ...state, checkboxes };

    case UPDATE_TEXTAREA:
      return { ...state, textarea: action.payload };

    case RESET_REGISTER_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default registerReasonReducer;