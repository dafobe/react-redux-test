import {List, Map, fromJS} from 'immutable';
import * as types from '../actions/action-types';

const initialState = Map();

export default function(state = initialState, action) {
  console.log('items-reducer');
  let newState = state;

  switch(action.type) {

    case types.GET_ITEMS_SUCCESS:
      newState= state.set('items',List(action.items));
  }
  console.log('items-reducer return', newState);
  return newState;
};
