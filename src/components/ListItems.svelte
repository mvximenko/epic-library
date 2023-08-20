<script lang="ts">
  import ImageLoader from './Image/ImageLoader.svelte';
  import { filtered } from '../stores.js';
  import { API_IMG, API_STORE, API_HEADER } from '../config';
</script>

<div id="cards">
  {#each $filtered as card (card)}
    <div class="card">
      <a href="{API_STORE}/{card.id}" aria-label={card.title}>
        <ImageLoader
          width="600"
          height="900"
          alt={card.title}
          src="{API_IMG}/{card.id}/library_600x900.jpg"
          fallback="{API_HEADER}/{card.id}/header.jpg"
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

    @media screen and (min-width: 600px) {
      transition: 0.2s;
      transform: perspective(222px) translate3d(0px, 5px, 0px) rotateX(0deg);
      perspective-origin: top;
      overflow: hidden;

      &:hover {
        transform: perspective(222px) translate3d(0px, 0px, 8px) rotateX(3deg);
        transform-origin: center;
        box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
      }

      &:active {
        filter: brightness(80%) contrast(110%);
      }

      &:before {
        width: 100%;
        height: 175%;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        pointer-events: none;
        background-image: linear-gradient(
          35deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.07) 51.5%,
          rgba(255, 255, 255, 0.15) 54%,
          rgba(255, 255, 255, 0.15) 100%
        );
        transform: translateY(-36%);
        transition: 0.2s;
        opacity: 0.5;
        z-index: 2;
      }

      &:hover {
        &:before {
          opacity: 1;
          transform: translateY(-20%);
        }
      }
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
