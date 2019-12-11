
import { FETCH_STORED_CONTACTS, FETCH_MORE_CONTACTS, SEARCH_CONTACTS } from './actionTypes'

export function fetchStoredContacts() {
    return {
      type: FETCH_STORED_CONTACTS
    };
}

export function fetchMoreContacts() {
  return {
    type: FETCH_MORE_CONTACTS
  };
}

export function searchContacts(search) {
  return {
    type: SEARCH_CONTACTS,
    search
  };
}