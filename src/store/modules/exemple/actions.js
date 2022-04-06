import Types from './types'

export function createPostRequest(data) {
  return { type: Types.CREATE_POST_REQUEST, data }
}

export function readPostRequest() {
  return { type: Types.READ_POST_REQUEST }
}

export function deletePostRequest(id) {
  return { type: Types.DELETE_POST_REQUEST, id }
}

export function updatePostRequest(data) {
  return { type: Types.EDIT_POST_REQUEST, data }
}

export function createPostSuccess(data) {
  return { type: Types.CREATE_POST_SUCCESS, data }
}

export function readPostSuccess(data) {
  return { type: Types.READ_POST_SUCCESS, data }
}

export function deletePostSuccess(id) {
  return { type: Types.DELETE_POST_SUCCESS, id }
}

export function updatePostSuccess(data) {
  return { type: Types.EDIT_POST_SUCCESS, data }
}
