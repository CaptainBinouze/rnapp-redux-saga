/**
 * @module Sagas/Contacts
 * @desc Contacts
 */

import { all, call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';

import  { 
          FETCH_STORED_CONTACTS, FETCH_STORED_CONTACTS_SUCCEEDED, FETCH_STORED_CONTACTS_FAILED,
          FETCH_MORE_CONTACTS, FETCH_MORE_CONTACTS_SUCCEEDED, FETCH_MORE_CONTACTS_FAILED, 
          SEARCH_CONTACTS, SET_SEARCH_CONTACTS 
        } from './../actions/actionTypes'
import fetchUsers from './../api';

function* workerFetchStoredContacts() {
  try {
    const contacts = yield call(fetchUsers);
    yield put({
      type: FETCH_STORED_CONTACTS_SUCCEEDED,
      contacts,
    });
  } catch (error) {
      yield put({
        type: FETCH_STORED_CONTACTS_FAILED,
        error,
      });
  }
}

function* workerFetchMoreContacts() {
  try {
    const newContacts = yield call(fetchUsers);
    yield put({
      type: FETCH_MORE_CONTACTS_SUCCEEDED,
      newContacts,
    });
  } catch (error) {
      yield put({
        type: FETCH_MORE_CONTACTS_FAILED,
        error,
      });
  }
}

function* workerSearchContacts(action) {

  var searchContacts = []
  const state = yield select()
  state.contacts.contacts.forEach(item => {

    if(item.username.includes(action.search)){
      searchContacts.push(item)
    }
  })

  yield put({
    type: SET_SEARCH_CONTACTS,
    searchContacts
  })
}

/**
 * Contacts Sagas
 */
export default function* root() {
  yield all([
    takeLatest(FETCH_STORED_CONTACTS, workerFetchStoredContacts),
    takeLatest(FETCH_MORE_CONTACTS, workerFetchMoreContacts),
    takeLatest(SEARCH_CONTACTS, workerSearchContacts)
  ]);
}