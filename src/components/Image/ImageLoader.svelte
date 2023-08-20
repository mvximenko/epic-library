<script script lang="ts">
  export let src: string;
  export let alt: string;
  export let width: string;
  export let height: string;
  export let fallback: string;

  import IntersectionObserver from './IntersectionObserver.svelte';
  import Image from './Image.svelte';
</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image {src} {alt} {width} {height} {fallback} />
  {/if}
</IntersectionObserver>
