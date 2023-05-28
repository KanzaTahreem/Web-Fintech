import ClientsData from "../components/ClientsData";

const SET_CLIENTS_DATA = 'clients/SET_CLIENTS_DATA';
const SELECT_UNSELECT_APPLICATION = 'clients/SELECT_UNSELECT_APPLICATION';
const UPDATE_APPROVAL_STATUS = 'clients/UPDATE_APPROVAL_STATUS';

export const setClientsData = (clientsData) => {
  return {
    type: SET_CLIENTS_DATA,
    payload: clientsData,
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

const initialState = {
  data: ClientsData,
};

const clientsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENTS_DATA:
      return {
        ...state,
        clientsData: action.payload,
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
            checked: false
          }
        }
        return item;
      });
      return {
        ...state,
        data: updatedStatus
      }
    default:
      return state;
  }
};

export default clientsDataReducer;