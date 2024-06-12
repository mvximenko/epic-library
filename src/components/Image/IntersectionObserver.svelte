<script lang="ts">
  import { onMount } from 'svelte';

  export let once = false;

  let intersecting = false;
  let container: HTMLDivElement;

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        intersecting = entries[0].isIntersecting;

        if (intersecting && once) {
          observer.unobserve(container);
        }
      });

      observer.observe(container);

      return () => observer.unobserve(container);
    }
  });
</script>

<div bind:this={container}>
  <slot {intersecting} />
</div>

<style lang="scss">
  div {
    width: 100%;
    height: 100%;
  }
</style>
