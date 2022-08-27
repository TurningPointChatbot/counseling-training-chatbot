<script lang="ts">
  export let cards;
  export let title = 'Title';
  export let subTitle = 'subtitle';
</script>

<div class="card-bordered m-3">
  <div class="h1 left-4 top-3 relative">
    {title}
  </div>
  <div class="p-faded left-8 top-1 relative">{subTitle}</div>
  <div class="card-body grid grid-cols-7 gap-4 gap-2 py-2 grid-flow-col">
    <slot />
  </div>
</div>
