<script script lang="ts">
  export let src: string;
  export let alt: string;
  export let width: string;
  export let height: string;
  export let fallback: string;

  import { onMount } from 'svelte';

  let loaded = false;
  let header = false;
  let thisImage;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
    thisImage.onerror = () => {
      header = true;
      thisImage.src = fallback;
      thisImage.classList.add('header');
    };
  });
</script>

<img
  {src}
  {alt}
  {width}
  {height}
  class:loaded
  class:header
  bind:this={thisImage}
  loading="lazy"
/>

<style lang="scss">
  img {
    height: auto;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }

  img.loaded {
    opacity: 1;
  }

  img.header {
    height: 100%;
    object-fit: contain;
    background-color: #24282f;
    background-image: linear-gradient(
      to right,
      #23262c,
      #23262c 3px,
      #24282f 3px,
      #24282f
    );
    background-size: 6px 100%;
  }
</style>
