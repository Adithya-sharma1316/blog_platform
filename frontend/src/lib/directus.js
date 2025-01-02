import { createDirectus, rest } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
const PUBLIC_APIURL='http://localhost:8055';

/**
 * @param {any} fetch
 */
function getDirectusInstance(fetch) {
  	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_APIURL, options ).with(rest());
	return directus;
}

export default getDirectusInstance;