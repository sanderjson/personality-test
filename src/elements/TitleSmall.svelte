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
    sm:text-lg sm:leading-none md:text-xl mt-1">
    {text}
  </h1>
{:else}
  <h1
    class="text-lg max-w-md mx-auto md:max-w-3xl tracking-tight leading-none font-extrabold text-gray-900
    sm:text-xl sm:leading-none md:text-2xl">
    {text}
  </h1>
{/if}
