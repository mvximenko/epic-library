<script lang="ts">
  import { filtered } from '../stores.js';
  import { API_IMG, API_STORE } from '../config';
</script>

<div id="cards">
  {#each $filtered as card}
    <div class="card">
      <a href="{API_STORE}/{card.id}">
        <img
          width="460"
          height="215"
          loading="lazy"
          alt={card.title}
          src="{API_IMG}/{card.id}/header.jpg"
        />
      </a>
    </div>
  {/each}
</div>

<style lang="scss">
  #cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 42px;
    }
  }

  .card {
    height: 0;
    position: relative;
    padding-top: calc(215 / 460 * 100%);
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

  img {
    height: auto;
    width: 100%;
  }
</style>
