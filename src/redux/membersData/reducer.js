import MembersData from '../../data/MembersData';

const initialState = {
  data: MembersData,
};

const membersDataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default membersDataReducer;
