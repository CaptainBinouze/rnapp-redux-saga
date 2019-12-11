
import { FETCH_STORED_CONTACTS_SUCCEEDED,FETCH_STORED_CONTACTS_FAILED,
         FETCH_MORE_CONTACTS_SUCCEEDED, SET_SEARCH_CONTACTS } from './../actions/actionTypes'
const initialState = { 
    contacts: [],
    contactsBySearch: [],
    error: null,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORED_CONTACTS_SUCCEEDED:
      return {
        ...state,
        contacts: action.contacts
      };
    case FETCH_STORED_CONTACTS_FAILED:
      return {
        ...state,
        error: action.error
      };
    case FETCH_MORE_CONTACTS_SUCCEEDED:
      return {
        ...state,
        contacts: [...state.contacts.concat(action.newContacts)]
      };
    case SET_SEARCH_CONTACTS:
      return {
        ...state,
        contactsBySearch: action.searchContacts
      };
    default:
      return state;
  }
}