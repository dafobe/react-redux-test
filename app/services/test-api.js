import axios from 'axios';
import store from '../store';
import { getItemsSuccess, deleteItemSuccess } from '../actions/items-actions';
import { search } from '../actions/search-actions';

/**
 * Get widgets
 */

export function getItems() {
  return axios.get('http://localhost:3011/items')
    .then(response => {
      store.dispatch(getItemsSuccess(response.data));
      return response;
    });
}

/**
 * Delete an item
 */

export function deleteItem(itemId) {
  return axios.delete('http://localhost:3011/items/' + itemId)
    .then(response => { store.dispatch(deleteItemSuccess(response.data));
          return response;
          }
    );
}

/**
 * Filter widgets
 */

export function filterItems(items, pattern) {
  store.dispatch(search(pattern, items));
//  return axios.get('http://localhost:3011/items')
//    .then(response => {
//      return response;
//    });
}