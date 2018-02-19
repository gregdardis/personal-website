import { URL_HOME } from '../constants';
import { UPDATE_SELECTED_URL } from '../actions';

export const reducer = (state = URL_HOME, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_URL:
      return action.selectedURL;
    default:
      return state;
  }
}