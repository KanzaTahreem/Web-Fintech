import ApplicationsData from "../data/ApplicationsData";

const SET_APPLICATIONS_DATA = 'applications/SET_APPLICATIONS_DATA';
const SELECT_UNSELECT_APPLICATION = 'applications/SELECT_UNSELECT_APPLICATION';
const UPDATE_APPROVAL_STATUS = 'applications/UPDATE_APPROVAL_STATUS';
const ADD_APPLICATION_DATA = 'applications/ADD_APPLICATION_DATA';
const UPDATE_FILTER = 'applications/UPDATE_FILTER';
const UPDATE_SORT_ORDER = 'applications/UPDATE_SORT_ORDER';
const UPDATE_LIMIT = 'applications/UPDATE_LIMIT';

export const setApplicationsData = (applicationsData) => {
  return {
    type: SET_APPLICATIONS_DATA,
    payload: applicationsData,
  };
};

export const selectUnSelectApplication = (payload) => ({
  type: SELECT_UNSELECT_APPLICATION,
  payload
})

export const updateApprovalStatus = (payload) => ({
  type: UPDATE_APPROVAL_STATUS,
  payload
});

export const addApplicationData = (payload) => ({
  type: ADD_APPLICATION_DATA,
  payload
});

export const updateFilter = (filter) => {
  return {
    type: UPDATE_FILTER,
    payload: filter
  }
}

export const updateSortOrder = (sortOrder) => {
  return {
    type: UPDATE_SORT_ORDER,
    payload: sortOrder
  }
}

export const updateLimit = (limit) => {
  return {
    type: UPDATE_LIMIT,
    payload: limit
  }
}

const initialLimit = 50;

const initialState = {
  data: ApplicationsData,
  filteredData: ApplicationsData.sort((a, b) => {
    if (a.applicationDate === b.applicationDate) return 0;
    if (!a.applicationDate) return 1;
    if (!b.applicationDate) return -1;
    return new Date(b.applicationDate) - new Date(a.applicationDate)
  }).slice(0, initialLimit),
  filter: '승인여부 전체',
  sortOrder: '신청일시순',
  limit: initialLimit
};

const applicationsDataReducer = (state = initialState, action) => {
  function getFilteredData(filter, sortOrder, limit) {
    // Return data filtered by filter state and sorted by sortOrder state and limited by limit state
    const filteredData = state.data.filter((item) => {
      if (filter === '승인여부 전체') return true;
      if (filter === '승인대기') return item.approvalStatus === '승인대기';
      if (filter === '승인완료') return item.approvalStatus === '승인완료';
      if (filter === '승인거부') return item.approvalStatus === '승인거부';
      return true;
    }
    ).sort((a, b) => {
      if (sortOrder === '신청일시순') {
        if (a.applicationDate === b.applicationDate) return 0;
        if (!a.applicationDate) return 1;
        if (!b.applicationDate) return -1;
        return new Date(b.applicationDate) - new Date(a.applicationDate)
      }
      if (sortOrder === '승인일시순') {
        if (a.approvalDate === b.approvalDate) return 0;
        if (!a.approvalDate) return 1;
        if (!b.approvalDate) return -1;
        return new Date(b.approvalDate) - new Date(a.approvalDate)
      }
      return 0;
    }
    ).slice(0, limit);
    return filteredData;
  }
  switch (action.type) {
    case SET_APPLICATIONS_DATA:
      return {
        ...state,
        data: action.payload,
        filteredData: getFilteredData(state.filter, state.sortOrder, state.limit)
      };
    case SELECT_UNSELECT_APPLICATION:
      const updatedData = state.data.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            checked: action.payload.checked
          }
        }
        return item;
      });
      // Update all items in filteredData that have the same serial as the selected item
      const updatedFilteredData = state.filteredData.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            checked: action.payload.checked
          }
        }
        return item;
      });
      return {
        ...state,
        data: updatedData,
        filteredData: updatedFilteredData
      };
    case UPDATE_APPROVAL_STATUS:
      const updatedStatus = state.data.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            approvalDate: action.payload.approvalDate,
            approvalStatus: action.payload.approvalStatus,
            checked: false,
            reason: action.payload.reasonOfDenial || item.reason,
            number: action.payload.memberNumber || item.number,
            name: action.payload.memberName || item.name,
          }
        }
        return item;
      });

      const updatedFilteredStatus = state.filteredData.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            approvalStatus: action.payload.approvalStatus,
            approvalDate: action.payload.approvalDate,
            checked: false,
            reason: action.payload.reasonOfDenial || item.reason,
            number: action.payload.memberNumber || item.number,
            name: action.payload.memberName || item.name,
          }
        }
        return item;
      });

      return {
        ...state,
        data: updatedStatus,
        filteredData: updatedFilteredStatus
      }
    case ADD_APPLICATION_DATA:
      const members = action.payload.members;
      const member = members.find((item) => item.number === action.payload.number);
      const prevApplication = state.data.find((item) => item.number === action.payload.number && item.approvalStatus === '승인대기');
      if (prevApplication) {
        return {
          ...state,
          data: state.data.map((item) => {
            if (item.number === action.payload.number && item.approvalStatus === '승인대기') {
              return {
                ...item,
                applicationType: action.payload.applicationType,
                docs: action.payload.docs,
                applicationDate: action.payload.applicationDate,
              }
            }
            return item;
          }),
          filteredData: state.filteredData.map((item) => {
            if (item.number === action.payload.number && item.approvalStatus === '승인대기') {
              return {
                ...item,
                applicationType: action.payload.applicationType,
                docs: action.payload.docs,
                applicationDate: action.payload.applicationDate,
              }
            }
            return item;
          })
        }
      }
      if (member) {
        return {
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
          }, ...state.filteredData].slice(0, state.limit)
        }
      }
      return state;
    case UPDATE_FILTER:
      return {
        ...state,
        filteredData: getFilteredData(action.payload, state.sortOrder, state.limit),
        filter: action.payload
      }
    case UPDATE_SORT_ORDER:
      return {
        ...state,
        filteredData: getFilteredData(state.filter, action.payload, state.limit),
        sortOrder: action.payload
      }
    case UPDATE_LIMIT:
      return {
        ...state,
        filteredData: getFilteredData(state.filter, state.sortOrder, action.payload),
        limit: action.payload
      }
    default:
      return state;
  }
};

export default applicationsDataReducer;