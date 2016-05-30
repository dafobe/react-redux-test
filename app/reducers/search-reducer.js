import {List, Map} from 'immutable';
import * as types from '../actions/action-types';

const initialState = Map();

function filterItems(state, pattern, searchType){
  const items = items || List();
  
  pattern = new RegExp(pattern?pattern.toLowerCase():pattern);

  let filteredItems = action.pattern?items.filter(item => {
                        return pattern.test(item.name.toLowerCase());
                      }):action.items
  return state.setIn(['filteredItems'], filteredItems);
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FILTER_ITEM:
      return filterItems(state.setIn('items')action.items, action.pattern);
  }
  return state;
};