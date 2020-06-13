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
  @media only screen and (min-width: 640px) {
    .progress-total {
      height: 360px;
      width: 64px;
    }
  }

  @media only screen and (min-width: 768px) {
    .progress-total {
      height: 450px;
      width: 80px;
    }
  }
</style>

<div class="bar progress-total bg-gray-300 relative rounded-md">
  <div
    style="height: calc({value}/57 * 100%); background-color: var(--cl-main);"
    class="bar progress absolute bottom-0 left-0 rounded-t-md rounded-b-sm" />
</div>
