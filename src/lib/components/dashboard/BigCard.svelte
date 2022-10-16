<script lang="ts">
  //export let cards;
  export let title = 'Title';
  export let subTitle = 'subtitle';
</script>

<div class="card card-bordered m-3">
  <div>
    <div class="h2-counsellor-dashboard"><h3 class="left-3 relative">{title}</h3></div>
    <p class="p-faded left-5 top-2 relative">{subTitle}</p>
    <div class="card-body grid grid-cols-7 gap-4 gap-2 py-2 grid-flow-col">
      <slot />
    </div>
  </div>
</div>
