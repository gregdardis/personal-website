import { URL_HOME } from '../constants';
import { UPDATE_SELECTED_PAGE_URL } from '../actions';

export const reducer = (state = URL_HOME, action) => {
  switch (action.type) {
  case UPDATE_SELECTED_PAGE_URL:
    return action.selectedPageUrl;
  default:
    return state;
  }
};