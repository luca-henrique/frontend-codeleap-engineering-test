import { all } from 'redux-saga/effects'

import user from './exemple/sagas'

export default function* rootSaga() {
  return yield all({ user })
}
