<script lang="ts">
  import Header from './components/Header.svelte';
  import ListItems from './components/ListItems.svelte';
</script>

<Header />
<ListItems />

<style lang="scss">
  :global(body) {
    margin: 0 5% 5% 5%;
    background: #24282f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
</style>
