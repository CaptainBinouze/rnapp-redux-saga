import { all, fork } from 'redux-saga/effects';

import contacts from './contacts';

export default function* root() {
  yield all([fork(contacts)]);
}