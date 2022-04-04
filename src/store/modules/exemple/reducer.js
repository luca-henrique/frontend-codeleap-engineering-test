import { produce } from 'immer';
import Types from './types';

const INITIAL_STATE = {
  data: {},
  loading: false,
  location: {},
  locationMarket: {},
  cart: [],
};

function Market(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.SET_USER_LOCATION: {
      return produce(state, (draft) => {
        draft.location = actions.location;
      });
    }

    default:
      return state;
  }
}
export default Market;