<script>
  export let text;
  export let onClick;
</script>

<span class="inline-flex rounded-md shadow-sm">
  <button
    on:click={onClick}
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent
    text-base leading-6 font-medium rounded-md text-white bg-indigo-600
    hover:bg-indigo-500 focus:outline-none focus:border-indigo-700
    focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out
    duration-150">
    {text}
  </button>
</span>
