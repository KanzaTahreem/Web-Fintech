import ApplicationsData from "../data/ApplicationsData";

const SET_APPLICATIONS_DATA = 'applications/SET_APPLICATIONS_DATA';
const SELECT_UNSELECT_APPLICATION = 'applications/SELECT_UNSELECT_APPLICATION';
const UPDATE_APPROVAL_STATUS = 'applications/UPDATE_APPROVAL_STATUS';
const ADD_APPLICATION_DATA = 'applications/ADD_APPLICATION_DATA';

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
})

const initialState = {
  data: ApplicationsData,
};

const applicationsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLICATIONS_DATA:
      return {
        ...state,
        data: action.payload,
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
      return {
        ...state,
        data: updatedData
      };
    case UPDATE_APPROVAL_STATUS:
      console.log(action.payload)
      const updatedStatus = state.data.map((item) => {
        if (item.serial === action.payload.serial) {
          return {
            ...item,
            approvalStatus: action.payload.approvalStatus,
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
        data: updatedStatus
      }
    case ADD_APPLICATION_DATA:
      const members = action.payload.members;
      const member = members.find((item) => item.number === action.payload.number);
      const prevApplication = state.data.find((item) => item.number === action.payload.number && item.approvalStatus === '승인대기');
      if (prevApplication) {
        return {
          ...state,
          data: state.data.map((item) => {
            if (item.number === action.payload.number) {
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
          }]
        }
      }
      return state;
    default:
      return state;
  }
};

export default applicationsDataReducer;