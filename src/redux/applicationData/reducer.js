import ApplicationsData from '../../data/ApplicationsData';
import { PENDING, DENIED, APPROVED } from '../../utils/constants';
import {
  SET_APPLICATIONS_DATA,
  TOGGLE_APPLICATION_CHECK,
  UPDATE_APPROVAL_STATUS,
  ADD_APPLICATION_DATA,
  UPDATE_FILTER,
  UPDATE_SORT_ORDER,
  UPDATE_LIMIT,
  UPDATE_CURRENT_PAGE,
} from './actions';

const initialLimit = 50;

const initialState = {
  data: ApplicationsData,
  filteredData: ApplicationsData.sort((a, b) => {
    if (a.applicationDate === b.applicationDate) return 0;
    if (!a.applicationDate) return 1;
    if (!b.applicationDate) return -1;
    return new Date(b.applicationDate) - new Date(a.applicationDate);
  }).slice(0, initialLimit),
  filter: '승인여부 전체',
  sortOrder: '신청일시순',
  limit: initialLimit,
  currentPage: 1,
};

const applicationsDataReducer = (state = initialState, action) => {
  function getFilteredData(filter, sortOrder) {
    const filteredData = state.data.filter((item) => {
      if (filter === '승인여부 전체') return true;
      if (filter === PENDING) return item.approvalStatus === PENDING;
      if (filter === APPROVED) return item.approvalStatus === APPROVED;
      if (filter === DENIED) return item.approvalStatus === DENIED;
      return true;
    }).sort((a, b) => {
      if (sortOrder === '신청일시순') {
        if (a.applicationDate === b.applicationDate) return 0;
        if (!a.applicationDate) return 1;
        if (!b.applicationDate) return -1;
        return new Date(b.applicationDate) - new Date(a.applicationDate);
      }
      if (sortOrder === '승인일시순') {
        if (a.approvalDate === b.approvalDate) return 0;
        if (!a.approvalDate) return 1;
        if (!b.approvalDate) return -1;
        return new Date(b.approvalDate) - new Date(a.approvalDate);
      }
      return 0;
    });
    return filteredData;
  }
  let updatedData;
  let updatedFilteredData;
  let updatedStatus;
  let updatedFilteredStatus;
  let members;
  let member;
  let prevApplication;
  let newState = {};
  switch (action.type) {
    case SET_APPLICATIONS_DATA:
      localStorage.setItem('APPLICATION_DATA', JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
        filteredData: getFilteredData(state.filter, state.sortOrder),
      };

    case TOGGLE_APPLICATION_CHECK:
      updatedData = state.data.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            checked: action.payload.checked,
          };
        }
        return item;
      });
      updatedFilteredData = state.filteredData.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            checked: action.payload.checked,
          };
        }
        return item;
      });

      return {
        ...state,
        data: updatedData,
        filteredData: updatedFilteredData,
      };

    case UPDATE_APPROVAL_STATUS:
      updatedStatus = state.data.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            approvalDate: action.payload.approvalDate,
            approvalStatus: action.payload.approvalStatus,
            checked: false,
            reason: action.payload.reasonOfDenial || item.reason,
            number: action.payload.memberNumber || item.number,
            name: action.payload.memberName || item.name,
          };
        }
        return item;
      });
      updatedFilteredStatus = state.filteredData.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            approvalStatus: action.payload.approvalStatus,
            approvalDate: action.payload.approvalDate,
            checked: false,
            reason: action.payload.reasonOfDenial || item.reason,
            number: action.payload.memberNumber || item.number,
            name: action.payload.memberName || item.name,
          };
        }
        return item;
      });

      localStorage.setItem('APPLICATION_DATA', JSON.stringify(updatedStatus));
      return {
        ...state,
        data: updatedStatus,
        filteredData: updatedFilteredStatus,
      };

    case ADD_APPLICATION_DATA:
      members = action.payload.members;
      member = members.find((item) => item.number === action.payload.number);
      prevApplication = state.data.find((item) => item.number === action.payload.number && item.approvalStatus === PENDING);
      if (prevApplication) {
        newState = {
          ...state,
          data: state.data.map((item) => {
            if (item.number === action.payload.number && item.approvalStatus === PENDING) {
              return {
                ...item,
                applicationType: action.payload.applicationType,
                docs: action.payload.docs,
                applicationDate: action.payload.applicationDate,
              };
            }
            return item;
          }),
          filteredData: state.filteredData.map((item) => {
            if (item.number === action.payload.number && item.approvalStatus === PENDING) {
              return {
                ...item,
                applicationType: action.payload.applicationType,
                docs: action.payload.docs,
                applicationDate: action.payload.applicationDate,
              };
            }
            return item;
          }),
        };
        localStorage.setItem('APPLICATION_DATA', JSON.stringify(newState.data));
        return newState;
      }
      if (member) {
        newState = {
          ...state,
          data: [...state.data, {
            previousType: member.investmentType,
            applicationType: action.payload.applicationType,
            number: action.payload.number,
            name: action.payload.name,
            docs: action.payload.docs,
            applicationDate: action.payload.applicationDate,
            approvalStatus: action.payload.approvalStatus,
            reason: action.payload.reason,
            serial: state.data.length + 1,
            checked: action.payload.checked,
            admin: action.payload.admin,
            approvalDate: action.payload.approvalDate,
          }],
          filteredData: [{
            previousType: member.investmentType,
            applicationType: action.payload.applicationType,
            number: action.payload.number,
            name: action.payload.name,
            docs: action.payload.docs,
            applicationDate: action.payload.applicationDate,
            approvalStatus: action.payload.approvalStatus,
            reason: action.payload.reason,
            serial: state.data.length + 1,
            checked: action.payload.checked,
            admin: action.payload.admin,
            approvalDate: action.payload.approvalDate,
          }, ...state.filteredData].slice(0, state.limit),
        };
        localStorage.setItem('APPLICATION_DATA', JSON.stringify(newState.data));
        return newState;
      }
      return state;

    case UPDATE_FILTER:
      return {
        ...state,
        filteredData: getFilteredData(action.payload, state.sortOrder),
        filter: action.payload,
      };

    case UPDATE_SORT_ORDER:
      return {
        ...state,
        filteredData: getFilteredData(state.filter, action.payload),
        sortOrder: action.payload,
      };

    case UPDATE_LIMIT:
      return {
        ...state,
        filteredData: getFilteredData(state.filter, state.sortOrder),
        limit: action.payload,
      };

    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        filteredData: getFilteredData(state.filter, state.sortOrder),
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default applicationsDataReducer;
