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

export function* readPost() {
  try {
    const response = yield call(api.get, 'careers', {
      headers: {
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Request-Headers': 'origin',
      },
    })
    console.log(response)
  } catch (error) {}
}

export default all([
  takeLatest(Types.CREATE_POST_REQUEST, createPost),
  takeLatest(Types.READ_POST_REQUEST, readPost),
])
