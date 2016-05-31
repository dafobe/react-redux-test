import {List, Map, fromJS} from 'immutable';
import * as types from '../actions/action-types';

const initialState = Map();

export default function(state = initialState, action) {
  let newState = state;

  switch(action.type) {

    case types.GET_ITEMS_SUCCESS:
      newState= state.set('items',List(action.items));
  }
  return newState;
};
