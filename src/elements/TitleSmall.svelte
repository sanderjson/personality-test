<script>
  export let text;
  export let min;
</script>

<style>
  .min {
    width: min-content;
  }
</style>

{#if min}
  <h1
    class:min
    class="text-md tracking-tight leading-none font-medium text-gray-900
    sm:text-5xl sm:leading-none md:text-6xl">
    {text}
  </h1>
{:else}
  <h1
    class="text-lg tracking-tight leading-none font-extrabold text-gray-900
    sm:text-5xl sm:leading-none md:text-6xl">
    {text}
  </h1>
{/if}
