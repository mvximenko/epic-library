import { writable, derived } from 'svelte/store';
import data from './data';

export const search = writable('');

export const cards = derived([search], ([$search]) =>
  data.filter((item) =>
    item.title.toLowerCase().includes($search.toLowerCase())
  )
);
