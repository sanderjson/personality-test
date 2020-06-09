<script>
  export let switchActive;
  export let links;
</script>

{#if links}
  <div class="img-group flex justify-evenly">
    <button on:click={switchActive(0, 'Lion')}>
      <img src="https://via.placeholder.com/64" alt="" />
    </button>
    <button on:click={switchActive(1, 'Beaver')}>
      <img src="https://via.placeholder.com/64" alt="" />
    </button>
    <button on:click={switchActive(2, 'Otter')}>
      <img src="https://via.placeholder.com/64" alt="" />
    </button>
    <button on:click={switchActive(3, 'Golden Retriever')}>
      <img src="https://via.placeholder.com/64" alt="" />
    </button>
  </div>
{:else}
  <div class="img-group flex mt-8 justify-between">
    <img src="https://via.placeholder.com/64" alt="" />
    <img src="https://via.placeholder.com/64" alt="" />
    <img src="https://via.placeholder.com/64" alt="" />
    <img src="https://via.placeholder.com/64" alt="" />
  </div>
{/if}
