import Types from './types';

export function getLocationUser(location) {
  return { type: Types.SET_USER_LOCATION, location };
}
