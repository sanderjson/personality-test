<script>
  import { onMount } from "svelte";
  import { testIsActive, testIsComplete } from "./stores.js";
  import Welcome from "./components/Welcome.svelte";
  import Test from "./components/Test.svelte";
  import Results from "./components/Results.svelte";
  import Paragraph from "./elements/Paragraph.svelte";
  import Twitter from "./elements/svgTwitter.svelte";
  import Linkedin from "./elements/svgLinkedin.svelte";

  const setRootHeight = () => {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
  };

  onMount(() => {
    setRootHeight();
  });

  window.addEventListener("resize", () => {
    setRootHeight();
  });
</script>

<style>
  .wrapper {
    height: calc(100 * var(--vh));
  }

  .wrapper main {
    flex-grow: 1;
  }

  .wrapper footer {
    height: min-content;
  }
</style>

<div class="wrapper flex flex-col justify-between">
  <main>
    <!-- <Results /> -->
    {#if !$testIsActive && !$testIsComplete}
      <Welcome />
    {:else if $testIsActive && !$testIsComplete}
      <Test />
    {:else if $testIsComplete}
      <Results />
    {/if}
  </main>

  <footer class="mt-3 md:mt-8 w-full mx-auto sm:max-w-lg md:max-w-4xl bg-gray-900 sm:rounded-t-md">
    <div
      class="mx-auto max-w-l md:max-w-3xl flex justify-between items-center max-w-screen-xl
      px-8 py-2 sm:mt-12 sm:pb-5 sm:px-6 md:mt-16">
      <div class="text-gray-600">Developed by J. Sanderson</div>
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
