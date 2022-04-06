import { takeLatest, all, call, put } from 'redux-saga/effects'
import Types from './types'
import api from 'src/service/api'

export function* createPost({ data }) {
  try {
    console.log(data)
    const response = yield call(api.post, 'careers', data)
    console.log(response)
  } catch (error) {}
}

export default all([takeLatest(Types.CREATE_POST_REQUEST, createPost)])
