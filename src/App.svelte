<script>
  import { testIsActive, testIsComplete } from "./stores.js";
  import Welcome from "./components/Welcome.svelte";
  import Test from "./components/Test.svelte";
  import Results from "./components/Results.svelte";
  import Paragraph from "./elements/Paragraph.svelte";
  import Twitter from "./elements/svgTwitter.svelte";
  import Linkedin from "./elements/svgLinkedin.svelte";
</script>

<style>
  .wrapper main {
    flex-grow: 1;
  }

  .wrapper footer {
    height: min-content;
  }
</style>

<div class="wrapper flex flex-col justify-between h-screen">
  <main>
    <Results />
    <!-- {#if !$testIsActive && !$testIsComplete}
      <Welcome />
    {:else if $testIsActive && !$testIsComplete}
      <Test />
    {:else if $testIsComplete}
      <Results />
    {/if} -->
  </main>

  <footer class="bg-gray-900">
    <div
      class="mx-auto h-full flex justify-between items-center max-w-screen-xl
      px-8 py-2 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div class="text-gray-600">app by Jonathan Sanderson</div>
      <div class="h-full pt-1">
        <a
          href="https://twitter.com/sanderjson"
          target="_blank"
          class="fill-current text-gray-700 inline-block w-5 h-5 rounded-sm">
          <Twitter />
        </a>
        <a
          href="https://linkedin.com/in/sandersonjma"
          target="_blank"
          class="fill-current ml-1 text-gray-700 inline-block w-5 h-5 rounded-sm">
          <Linkedin />
        </a>
      </div>
    </div>
  </footer>
</div>
