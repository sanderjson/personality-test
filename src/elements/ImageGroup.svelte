<script>
  export let switchActive;
  export let activeType;
  export let links;
</script>

<style>
  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  img,
  button {
    display: block;
  }
  .overlay {
    content: "";
    mix-blend-mode: overlay;
    transition: all 0.2s ease;
    pointer-events: none;
    box-sizing: border-box;
  }

  .img-button:hover + .overlay {
    background: var(--cl-main);
    opacity: 0.191;
    transform: translateY(0);
  }

  .active {
    transform: translateY(8px);
    border-bottom: 5px solid;
    border-color: var(--cl-main);
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 128px;
      height: 128px;
    }
  }
</style>

{#if links}
  <div class="img-group flex justify-evenly">

    <div class="test relative">
      <button class="img-button" on:click={switchActive(0, 'Lion')}>
        <img src="static/lion144.jpg" alt="" />
      </button>
      <div
        class:active={activeType == 'Lion'}
        class="overlay absolute inset-0" />
    </div>

    <div class="relative">
      <button class="img-button" on:click={switchActive(1, 'Beaver')}>
        <img src="static/beaver144.jpg" alt="" />
      </button>
      <div
        class:active={activeType == 'Beaver'}
        class="overlay absolute inset-0" />
    </div>

    <div class="relative">
      <button class="img-button" on:click={switchActive(2, 'Otter')}>
        <img class="block" src="static/otter144.jpg" alt="" />
      </button>
      <div
        class:active={activeType == 'Otter'}
        class="overlay absolute inset-0" />
    </div>

    <div class="relative">

      <button class="img-button" on:click={switchActive(3, 'Golden Retriever')}>
        <img src="static/goldenRetriever144.jpg" alt="" />
      </button>
      <div
        class:active={activeType == 'Golden Retriever'}
        class="overlay absolute inset-0" />
    </div>

  </div>
{:else}
  <div class="img-group flex mt-8 justify-between rounded-sm">
    <img src="static/lion144.jpg" alt="" />
    <img src="static/beaver144.jpg" alt="" />
    <img src="static/otter144.jpg" alt="" />
    <img src="static/goldenRetriever144.jpg" alt="" />
  </div>
{/if}
