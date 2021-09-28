<script lang="ts">
  import data from '../data.js';
  import { term } from '../stores.js';

  let val = '';
  $: term.set(val);
</script>

<header>
  <h1 class="heading">Epic Library {data.length}</h1>

  <input bind:value={val} type="text" id="searchInput" aria-label="Search" />
</header>

<style lang="scss">
  .heading {
    margin: 25px 0;
    color: #ccc;
    position: relative;
  }
</style>
