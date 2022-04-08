import { produce } from 'immer'
import Types from './types'

import updateState from 'src/helper/updateState'
import id from 'date-fns/esm/locale/id/index.js'

const INITIAL_STATE = {
  data: [],
  loading: false,

  modal_visible_update: false,
  item_delete: id,

  modal_visible_delete: false,
  item_update: false,
}

function Market(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_POST_REQUEST: {
      return produce(state, draft => {
        draft.loading = true
      })
    }

    case Types.READ_POST_SUCCESS: {
      return produce(state, draft => {
        draft.loading = false
        draft.data = actions.data
      })
    }

    case Types.CREATE_POST_SUCCESS: {
      return produce(state, draft => {
        draft.data = [actions.data, ...draft.data]
      })
    }

    case Types.DELETE_POST_SUCCESS: {
      return produce(state, draft => {
        draft.data = [...draft.data.filter(elem => elem.id !== actions.id)]
      })
    }

    case Types.EDIT_POST_SUCCESS:
      return produce(state, draft => {
        draft.data = updateState(draft.data, actions.data)
      })

    case Types.OPEN_MODAL_DELETE_POST:
      return produce(state, draft => {
        draft.modal_visible_delete = true
        draft.item_delete = actions.id
      })

    case Types.OPEN_MODAL_UPDATE_POST:
      return produce(state, draft => {
        draft.modal_visible_update = true
        draft.item_update = draft.id
      })

    default:
      return state
  }
}
export default Market
