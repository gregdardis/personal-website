import { URL_HOME_PAGE } from '../constants';
import { UPDATE_SELECTED_PAGE_URL } from '../actions';

export const reducer = (state = URL_HOME_PAGE, action) => {
  switch (action.type) {
  case UPDATE_SELECTED_PAGE_URL:
    return action.selectedPageUrl;
  default:
    return state;
  }
};