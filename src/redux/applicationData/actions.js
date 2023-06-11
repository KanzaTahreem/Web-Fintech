import generateAction from '../../utils/generateAction';

export const SET_APPLICATIONS_DATA = 'applications/SET_APPLICATIONS_DATA';
export const TOGGLE_APPLICATION_CHECK = 'applications/TOGGLE_APPLICATION_CHECK';
export const UPDATE_APPROVAL_STATUS = 'applications/UPDATE_APPROVAL_STATUS';
export const ADD_APPLICATION_DATA = 'applications/ADD_APPLICATION_DATA';
export const UPDATE_FILTER = 'applications/UPDATE_FILTER';
export const UPDATE_SORT_ORDER = 'applications/UPDATE_SORT_ORDER';
export const UPDATE_LIMIT = 'applications/UPDATE_LIMIT';
export const UPDATE_CURRENT_PAGE = 'applications/UPDATE_CURRENT_PAGE';

export const setApplicationsData = (applicationsData) => generateAction(SET_APPLICATIONS_DATA, applicationsData);

export const toggleApplicationCheck = (payload) => generateAction(TOGGLE_APPLICATION_CHECK, payload);

export const updateApprovalStatus = (payload) => generateAction(UPDATE_APPROVAL_STATUS, payload);

export const addApplicationData = (payload) => generateAction(ADD_APPLICATION_DATA, payload);

export const updateFilter = (filter) => generateAction(UPDATE_FILTER, filter);

export const updateSortOrder = (sortOrder) => generateAction(UPDATE_SORT_ORDER, sortOrder);

export const updateLimit = (limit) => generateAction(UPDATE_LIMIT, limit);

export const updateCurrentPage = (page) => generateAction(UPDATE_CURRENT_PAGE, page);
