<script>
  export let text;
  export let onClick;
</script>

<style>
  button {
    /* bg-indigo-600 */
    background: var(--cl-main);
  }
  button:hover {
    background: var(--cl-main-light);
  }
  button:focus {
    box-shadow: 0 0 5px var(--cl-main-dark);
  }
  button:active {
    /* active:bg-indigo-700 */
    background: var(--cl-main-dark);
  }
</style>

<span class="inline-flex rounded-md shadow-sm">
  <button
    on:click={onClick}
    type="button"
    class="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 border text-base
    lg:text-lg leading-6 font-semibold rounded-md text-white focus:outline-none
    transition ease-in-out duration-150">
    {text}
  </button>
</span>
