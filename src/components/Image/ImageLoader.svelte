<script lang="ts">
  import IntersectionObserver from './IntersectionObserver.svelte';
  import Image from './Image.svelte';

  export let src: string;
  export let alt: string;
  export let fallback: string;
</script>

<IntersectionObserver once={true} let:intersecting>
  {#if intersecting}
    <Image {src} {alt} {fallback} {...$$restProps} />
  {/if}
</IntersectionObserver>
