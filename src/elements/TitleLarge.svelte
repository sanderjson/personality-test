<script>
  export let text;
  export let hero;
</script>

<style>
  .span {
    color: var(--cl-main);
  }
</style>

{#if hero}
  <h1
    class="text-4xl tracking-tight text-center leading-10 font-extrabold
    text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
    {text[0]}
    <br class="xl:hidden" />
    <span class="span">{text[1]}</span>
  </h1>
{:else}

  <h1
    class="text-4xl tracking-tight text-center leading-10 font-extrabold
    text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
    {text}
  </h1>
{/if}
