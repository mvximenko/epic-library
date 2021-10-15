<script script lang="ts">
  export let src: string;
  export let alt: string;
  export let width: string;
  export let height: string;

  import { onMount } from 'svelte';

  let loaded = false;
  let thisImage;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<img
  {src}
  {alt}
  {width}
  {height}
  class:loaded
  bind:this={thisImage}
  loading="lazy"
/>

<style>
  img {
    height: auto;
    width: 100%;
    opacity: 0;
    transition: opacity 500ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
</style>
