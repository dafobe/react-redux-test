
import * as types from '../actions/action-types';

export function getItemsSuccess(items) {
  return {
    type: types.GET_ITEMS_SUCCESS,
    items
  };
}

export function deleteItemSuccess(itemId) {
  return {
    type: types.DELETE_ITEM_SUCCESS,
    itemId
  };
}
