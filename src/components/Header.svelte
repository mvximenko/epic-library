<script lang="ts">
  import data from '../data.js';
  import { term } from '../stores.js';

  let val = '';
  $: term.set(val);
</script>

<header class="header">
  <h1 class="heading">
    Epic Library <span class="quantity">({data.length})</span>
  </h1>

  <input
    bind:value={val}
    class="search"
    type="text"
    aria-label="Search"
    placeholder="Search by Name"
  />
</header>

<style lang="scss">
  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 1.25em 0;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 600px) {
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
    }

    @media screen and (min-width: 1920px) {
      font-size: 22.4px;
    }
  }

  .heading {
    color: #ccc;
  }

  .quantity {
    font-size: 0.8em;
  }

  .search {
    height: 2em;
    max-width: 80%;
    padding: 0 1em;
    margin-bottom: 0.67em;
    font-size: 1.2em;
    color: #ccc;
    background: #24282f;
    border: 2px solid #707070;
    border-radius: 10px;
    outline: none;

    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  }
</style>
