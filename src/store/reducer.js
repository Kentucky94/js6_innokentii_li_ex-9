import {INIT_CONTACTS_SUCCESS} from "./actions";

const initialState = {
  contacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CONTACTS_SUCCESS:
      const contacts = Object.keys(action.data).map(key => ({...action.data[key], id: key}));
      return {
        ...state,
        contacts
      };
    default:
      return state;
  }
};

export default reducer;