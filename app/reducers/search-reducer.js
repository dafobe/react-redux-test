import {List, Map} from 'immutable';
import * as types from '../actions/action-types';

const initialState = Map();

function filterItems(state, pattern, searchType){
  const items = state.getIn(['items']) || List();
  
  pattern = new RegExp(pattern?pattern.toLowerCase():pattern);

  let filteredItems = pattern?items.filter(item => {
                        return pattern.test(item.name.toLowerCase());
                      }):items
  return state.setIn(['filteredItems'], filteredItems);
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FILTER_ITEM:
      return filterItems(state.set('items', action.items), action.pattern);
  }
  return state;
};