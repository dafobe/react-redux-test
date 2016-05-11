import { combineReducers } from 'redux';

// Reducers
import itemsReducer from './items-reducer';
import searchReducer from './search-reducer';

// Combine Reducers
var reducers = combineReducers({
  itemsState: itemsReducer,
  searchState: searchReducer
});

export default reducers;
