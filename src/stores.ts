import { writable, derived } from 'svelte/store';
import data from './data';

export const term = writable('');
export const items = writable(data);
export const filtered = derived([term, items], ([$term, $items]) =>
  $items.filter((item) =>
    item.title.toLowerCase().includes($term.toLowerCase())
  )
);
