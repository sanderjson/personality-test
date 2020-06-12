<script>
  export let list;
</script>

<ul
  class="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5
  md:text-xl md:max-w-3xl">
  {#each list as item}
    <li>• {item}</li>
  {/each}
</ul>
