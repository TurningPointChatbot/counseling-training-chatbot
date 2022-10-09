<script lang="ts">
    export let imgUrl =
      'https://api.lorem.space/image/furniture?w=400&h=225&hash=33751';
    export let trainingType = '';
    export let path = '/dashboard'
    export let description = ""
  </script>

<div>
    <a
    class="bg-gray-100 text-gray-800 text-center rounded-md flex flex-col items-center"
    href={path}>
    <img class="rounded-md col-span-1" src={imgUrl} alt="Module" />
    <div class="mb-2">
        <b>
            <h4 class="whitespace-nowrap pt-4 font-medium">{trainingType}</h4>
            <p class="p-faded left-5 top-2 font-light pb-4">{description}</p>
          </b>
    </div>
    </a>

</div>