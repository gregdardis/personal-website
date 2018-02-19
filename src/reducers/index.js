import { combineReducers } from 'redux';

import { reducer as selectedPageURL } from './selectedPageURL';

const reducer = combineReducers({
  selectedPageURL
});
export default reducer;