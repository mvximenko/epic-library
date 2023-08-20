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
    placeholder="Search"
  />
</header>

<style lang="scss">
  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0;

    @media screen and (min-width: 600px) {
      margin: 2rem 0;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .heading {
    color: #ccc;
    margin: 0 0 1rem 0;

    @media screen and (min-width: 600px) {
      margin: 0;
    }
  }

  .quantity {
    font-size: 1.6rem;
  }

  .search {
    width: 100%;
    height: 2.4rem;
    padding: 0 1rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    color: #ccc;
    background: #24282f;
    border: 2px solid #707070;
    outline: none;

    @media screen and (min-width: 600px) {
      border-radius: 10px;
      margin-bottom: 0;
      width: auto;
    }
  }
</style>
