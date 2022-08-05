<script lang="ts">
  export let cards;
  export let title = 'Title';
  export let subTitle = 'subtitle';
</script>

<div class="card-bordered m-3">
  <div id="title" class="font-bold text-xl mb-2 text-gray-700 pt-3">
    {title}
  </div>
  <div id="subtitle">{subTitle}</div>
  <div class="card-body grid grid-cols-7 gap-4 gap-2 py-2 grid-flow-col">
    <slot />
  </div>
</div>

<style>
  #subtitle {
    position: relative;
    left: 30px;
    top: 5px;
    color: lightgrey;
  }

  #title {
    position: relative;
    left: 30px;
    top: 10px;
    letter-spacing: 0.025em;
  }
</style>
