import { combineReducers } from 'redux';

// Reducers
import componentReducer from './component-reducer';

// Combine Reducers
var reducers = combineReducers({
  componentReducer: componentReducer
});

export default reducers;
