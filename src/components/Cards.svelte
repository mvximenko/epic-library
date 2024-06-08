<script lang="ts">
  import ImageLoader from './Image/ImageLoader.svelte';
  import { cards } from '../stores.js';
  import { API_IMG, API_STORE, API_HEADER } from '../config';
</script>

<div class="cards">
  {#each $cards as card (card.id)}
    <div class="card">
      <a href="{API_STORE}/{card.id}" aria-label={card.title}>
        <ImageLoader
          alt={card.title}
          src="{API_IMG}/{card.id}/library_600x900.jpg"
          fallback="{API_HEADER}/{card.id}/header.jpg"
          color={card.color}
        />
      </a>
    </div>
  {/each}
</div>

<style lang="scss">
  .cards {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (min-width: 600px) {
      gap: 15px;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }

  .card {
    position: relative;
    height: 0;
    padding-top: calc(900 / 600 * 100%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    overflow: hidden;

    @media screen and (min-width: 600px) {
      perspective-origin: top;
      transform: perspective(222px) translate3d(0px, 5px, 0px) rotateX(0deg);
      transition: 0.2s;

      &:active {
        filter: brightness(80%) contrast(110%);
      }

      &:before {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 175%;
        background-image: linear-gradient(
          35deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.07) 51.5%,
          rgba(255, 255, 255, 0.15) 54%,
          rgba(255, 255, 255, 0.15) 100%
        );
        content: '';
        opacity: 0.5;
        pointer-events: none;
        transform: translateY(-36%);
        transition: 0.2s;
      }

      &:hover {
        box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
        transform: perspective(222px) translate3d(0px, 0px, 8px) rotateX(3deg);
        transform-origin: center;

        &:before {
          opacity: 1;
          transform: translateY(-20%);
        }
      }
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
