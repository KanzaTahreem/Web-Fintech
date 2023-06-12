import {
  TOGGLE_CHECKBOX,
  RESET_ADD_REASON_MODAL,
  UPDATE_TEXTAREA,
} from './actions';

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

const addReasonReducer = (state = initialState, action) => {
  const toggleChecking = (action) => {
    const { payload: label } = action;
    const checkboxes = {};
    Object.keys(state.checkboxes).forEach((key) => {
      checkboxes[key] = key === label;
    });
    return { ...state, checkboxes };
  };

  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return toggleChecking(action);

    case UPDATE_TEXTAREA:
      return { ...state, textarea: action.payload };

    case RESET_ADD_REASON_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default addReasonReducer;
