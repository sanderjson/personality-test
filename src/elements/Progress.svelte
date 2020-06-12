<script>
  export let value;
  // export let name;
</script>

<style>
  .bar {
    content: "";
  }

  .progress-total {
    height: 180px;
    width: 32px;
  }

  .progress {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    .progress-total {
      height: 360px;
      width: 64px;
    }
  }
</style>

<div class="bar progress-total bg-gray-300 relative rounded-md">
  <div
    style="height: calc({value}/57 * 100%)"
    class="bar progress bg-indigo-600 absolute bottom-0 left-0 rounded-t-md
    rounded-b-sm" />
</div>
