<script>
  import Image from "svelte-image";
  export let switchActive;
  export let links;
</script>

<style>
  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  @media only screen and (min-width: 768px) {
    img {
      width: 128px;
      height: 128px;
      object-fit: cover;
    }
  }
</style>

{#if links}
  <div class="img-group flex justify-evenly">
    <button on:click={switchActive(0, 'Lion')}>
      <img src="static/lion128.jpg" alt="" />
    </button>
    <button on:click={switchActive(1, 'Beaver')}>
      <img src="static/beaver128.jpg" alt="" />
    </button>
    <button on:click={switchActive(2, 'Otter')}>
      <img src="static/otter128.jpg" alt="" />
    </button>
    <button on:click={switchActive(3, 'Golden Retriever')}>
      <img src="static/goldenRetriever128.jpg" alt="" />
    </button>
  </div>
{:else}
  <div class="img-group flex mt-8 justify-between rounded-sm">
    <img src="static/lion128.jpg" alt="" />
    <img src="static/beaver128.jpg" alt="" />
    <img src="static/otter128.jpg" alt="" />
    <img src="static/goldenRetriever128.jpg" alt="" />
  </div>
{/if}
