<script lang="ts">
  import data from '../data.js';
  import { search } from '../stores.js';
</script>

<header class="header">
  <h1 class="heading">
    Epic Library <span class="quantity">({data.length})</span>
  </h1>

  <input
    class="search"
    aria-label="search"
    placeholder="Search"
    bind:value={$search}
  />
</header>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 1rem 0;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin: 2rem 0;
    }
  }

  .heading {
    margin: 0 0 1rem 0;
    color: var(--text-color-primary);

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
    box-sizing: border-box;
    padding: 0 1rem;
    background: var(--bg-color-secondary);
    color: var(--text-color-primary);
    font-size: 1.2rem;
    border: none;
    outline: none;

    &::placeholder {
      color: var(--text-color-primary-placeholder);
    }

    @media screen and (min-width: 600px) {
      width: auto;
      border-radius: 10px;
    }
  }
</style>
