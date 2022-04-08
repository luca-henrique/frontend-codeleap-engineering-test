import { takeLatest, all, call, put } from 'redux-saga/effects'
import Types from './types'
import api from 'src/service/api'

import {
  readPostSuccess,
  createPostSuccess,
  deletePostSuccess,
  updatePostSuccess,
} from './actions'

export function* createPost({ data }) {
  try {
    const response = yield call(api.post, 'careers/', data)
    yield put(createPostSuccess(response.data))
  } catch (error) {}
}

export function* readPost() {
  try {
    const { data } = yield call(api.get, 'careers/')
    yield put(readPostSuccess(data.results))
  } catch (error) {}
}

export function* deletePost({ id }) {
  try {
    yield call(api.delete, `careers/${id}/`)
    yield put(deletePostSuccess(id))
  } catch (error) {}
}

export function* updatePost({ data }) {
  try {
    yield call(api.delete, `careers/${data.id}/`, data)
    yield put(updatePostSuccess(data))
  } catch (error) {}
}

export default all([
  takeLatest(Types.DELETE_POST_REQUEST, deletePost),
  takeLatest(Types.EDIT_POST_REQUEST, updatePost),
  takeLatest(Types.CREATE_POST_REQUEST, createPost),
  takeLatest(Types.READ_POST_REQUEST, readPost),
])
