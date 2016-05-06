import axios from 'axios';

/**
 * Get widgets
 */

export function getItems() {
  return axios.get('http://localhost:3011/items')
    .then(response => response.data);
}

/**
 * Delete an item
 */

export function deleteItem(itemId) {
  return axios.delete('http://localhost:3011/items/' + itemId);
}
