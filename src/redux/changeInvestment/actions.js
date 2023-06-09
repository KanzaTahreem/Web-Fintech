import { generateAction } from "../../utils/generateAction";

export const SET_SELECTED_ITEM = 'investChange/SET_SELECTED_ITEM';
export const SET_UPLOADED_FILES = 'investChange/SET_UPLOADED_FILES';
export const REMOVE_UPLOADED_FILE = 'investChange/REMOVE_UPLOADED_FILE';

export const setSelectedItem = (item) => generateAction(SET_SELECTED_ITEM, item);

export const setUploadedFiles = (files) => generateAction(SET_UPLOADED_FILES, files);

export const removeUploadedFile = (fileIndex) => generateAction(REMOVE_UPLOADED_FILE, fileIndex);
