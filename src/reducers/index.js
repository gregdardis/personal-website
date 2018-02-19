import { combineReducers } from 'redux';

import { reducer as selectedPageUrl } from './selectedPageUrl';

const reducer = combineReducers({
  selectedPageUrl
});
export default reducer;