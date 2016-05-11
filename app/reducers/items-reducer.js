import * as types from '../actions/action-types';

const initialState = {items: []};

const itemsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      });
  }
  
  return state;
}

export default itemsReducer;
