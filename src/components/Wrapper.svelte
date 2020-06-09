<script>
  import Button from "../elements/Button.svelte";

  export let onClick, text;
</script>

<style>
</style>

<div
  class="h-full mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20
  xl:mt-28">
  <div class="container h-full">

    <slot />

    <div class="button-wrapper mt-8 mb-8 text-center">
      <Button {onClick} {text} />
    </div>

  </div>
</div>
