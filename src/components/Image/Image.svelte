<script lang="ts">
  export let src: string;
  export let alt: string;
  export let fallback: string;
  export let color = '';

  let loaded = false;

  function handleLoad() {
    loaded = true;
  }

  function handleError(e: Event & { currentTarget: EventTarget & Element }) {
    if (src !== fallback) {
      let styles = 'display: flex; align-items: center;';

      if (color) {
        styles += `background: ${color};`;
      }

      e.currentTarget.parentElement?.setAttribute('style', styles);

      src = fallback;
    }
  }
</script>

<div class:loaded>
  <img {src} {alt} loading="lazy" on:load={handleLoad} on:error={handleError} />
</div>

<style lang="scss">
  div {
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }

  img {
    width: 100%;
    height: auto;
  }

  .loaded {
    opacity: 1;
  }
</style>
