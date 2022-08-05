<script lang="ts">
  export let imgUrl = "https://api.lorem.space/image/shoes?w=400&h=225";
  export let moduleName = "";
</script>

<a href="/">
  <!-- TODO: Correct url -->
  <h2>{moduleName}</h2>
  <div class="card-body grid grid-cols-10 gap-3 w-full">
    <div class="col-span-3"><p>04/05/2022</p></div>
    <div class="col-span-3">
      <img
        class="rounded-md"
        src={imgUrl}
        alt="Module Card"
      />
    </div>
  </div>
</a>
