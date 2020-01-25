import axiosOrders from "../axiosOrders";

export const POST_CONTACT_REQUEST = 'POST_CONTACT_REQUEST';
export const POST_CONTACT_SUCCESS = 'POST_CONTACT_SUCCESS';
export const POST_CONTACT_FAILURE = 'POST_CONTACT_FAILURE';

export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';

export const INIT_CONTACTS_REQUEST = 'INIT_CONTACTS_REQUEST';
export const INIT_CONTACTS_SUCCESS = 'INIT_CONTACTS_SUCCESS';
export const INIT_CONTACTS_FAILURE = 'INIT_CONTACTS_FAILURE';

export const postContactRequest = () => ({type: POST_CONTACT_REQUEST});
export const postContactSuccess = () => ({type: POST_CONTACT_SUCCESS});
export const postContactFailure = (error) => ({type: POST_CONTACT_FAILURE, error});

export const deleteContactRequest = () => ({type: DELETE_CONTACT_REQUEST});
export const deleteContactSuccess = () => ({type: DELETE_CONTACT_SUCCESS});
export const deleteContactFailure = (error) => ({type: DELETE_CONTACT_FAILURE, error});

export const initContactsRequest = () => ({type: INIT_CONTACTS_REQUEST});
export const initContactsSuccess = (data) => ({type: INIT_CONTACTS_SUCCESS, data});
export const initContactsFailure = (error) => ({type: INIT_CONTACTS_FAILURE, error});

export const postContact = (contactData) => {
  return async dispatch => {
    try{
      dispatch(postContactRequest());
      await axiosOrders.post('/contacts.json', contactData);
      dispatch(initContacts());
      dispatch(postContactSuccess());
    }catch(e){
      dispatch(postContactFailure(e))
    }
  }
};

export const deleteContact = (contactID) => {
  return async dispatch => {
    try{
      dispatch(deleteContactRequest());
      await axiosOrders.delete(`/contacts/${contactID}.json`);
      dispatch(initContacts());
      dispatch(deleteContactSuccess());
    }catch(e){
      dispatch(deleteContactFailure(e))
    }
  }
};

export const initContacts = () => {
  return async dispatch => {
    try{
      dispatch(initContactsRequest());
      const response = await axiosOrders.get(`/contacts.json`);
      dispatch(initContactsSuccess(response.data));
    }catch(e){
      dispatch(initContactsFailure(e))
    }
  }
};

