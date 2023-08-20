<script lang="ts">
  import ImageLoader from './Image/ImageLoader.svelte';
  import { filtered } from '../stores.js';
  import { API_IMG, API_STORE } from '../config';
</script>

<div id="cards">
  {#each $filtered as card (card)}
    <div class="card">
      <a href="{API_STORE}/{card.id}" aria-label={card.title}>
        <ImageLoader
          width="460"
          height="215"
          alt={card.title}
          src="{API_IMG}/{card.id}/library_600x900.jpg"
        />
      </a>
    </div>
  {/each}
</div>

<style lang="scss">
  #cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
    }
  }

  .card {
    height: 0;
    position: relative;
    padding-top: calc(900 / 600 * 100%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    transition: 0.3s;

    &:hover,
    &:focus,
    &:active {
      box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
      transform: scale(1.05);
    }
  }

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
