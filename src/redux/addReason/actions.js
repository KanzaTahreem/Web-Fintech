import generateAction from '../../utils/generateAction';

export const TOGGLE_CHECKBOX = 'addReason/TOGGLE_CHECKBOX';
export const UPDATE_TEXTAREA = 'addReason/UPDATE_TEXTAREA';
export const RESET_ADD_REASON_MODAL = 'addReason/RESET_ADD_REASON_MODAL';

export const toggleCheckbox = (label) => generateAction(TOGGLE_CHECKBOX, label);

export const resetAddReasonModal = () => generateAction(RESET_ADD_REASON_MODAL, undefined);

export const updateTextarea = (value) => generateAction(UPDATE_TEXTAREA, value);
