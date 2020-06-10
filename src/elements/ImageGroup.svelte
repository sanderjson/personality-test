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
</style>

{#if links}
  <div class="img-group flex justify-evenly">
    <button on:click={switchActive(0, 'Lion')}>
      <img src="static/lion.jpg" alt="" />
    </button>
    <button on:click={switchActive(1, 'Beaver')}>
      <img src="static/beaver.jpg" alt="" />
    </button>
    <button on:click={switchActive(2, 'Otter')}>
      <img src="static/otter.jpg" alt="" />
    </button>
    <button on:click={switchActive(3, 'Golden Retriever')}>
      <img src="static/goldenRetriever.jpg" alt="" />
    </button>
  </div>
{:else}
  <div class="img-group flex mt-8 justify-between">
    <img src="static/lion.jpg" alt="" />
    <img src="static/beaver.jpg" alt="" />
    <img src="static/otter.jpg" alt="" />
    <img src="static/goldenRetriever.jpg" alt="" />
  </div>
{/if}
