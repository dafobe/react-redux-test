
import * as types from '../actions/action-types';

export function search(pattern) {
  return {
    type: types.FILTER_ITEM,
    pattern
  };
}
