
import * as types from '../actions/action-types';

export function getItems(items) {
  return {
    type: types.GET_ITEMS_SUCCESS,
    items
  };
}

export function deleteItem(itemId) {
  return {
    type: types.DELETE_ITEM_SUCCESS,
    itemId
  };
}
