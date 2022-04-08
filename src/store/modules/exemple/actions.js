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

export function openAlertDeletePost(id) {
  return { type: Types.OPEN_MODAL_DELETE_POST, id }
}

export function closeAlertDeletePost() {
  return { type: Types.CLOSE_MODAL_DELETE_POST }
}

export function openModalUpdatePost(id) {
  return { type: Types.OPEN_MODAL_UPDATE_POST, id }
}

export function closeModalUpdatePost() {
  return { type: Types.CLOSE_MODAL_UPDATE_POST }
}
