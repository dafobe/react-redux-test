
import * as types from '../actions/action-types';

export function search(pattern, items) {
  return {
    type: types.FILTER_ITEM,
    pattern,
    items
  };
}
