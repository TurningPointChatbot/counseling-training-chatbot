<script lang="ts">
  export let titleButton = 'Name';
  export let path = '';
  export let image =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
  export let alt = 'image';
  export let imageClass = 'rounded-full h-32 w-32';
  export let cardClass =
    'module-card p-5 text-center rounded-md hover:-translate-y-1 flex flex-col items-center';
</script>

<a class={cardClass} href="/">
  <div class="rounded">
   
    <a href={path}
      >
      <img class={imageClass} src={image} {alt} />
      <button type="button" class="text-small mb-2">{titleButton}</button></a
    >
  </div></a
>
