<script>
    let counsellorPreview = [
    {
      title: 'Davos Sand',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      title: 'Evelyn Chua',
      description: 'Senior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      title: 'Isabella Howard',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    },{
      title: 'Jackson Tyler',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    }]
</script>

<!doctype html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Tailwind CSS -->
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">


  <title>Tailwind CSS CDN</title>
  <div class="font-bold text-xl mb-2">Counsellors</div>
  <p class="text-gray-700 text-base">
    Recently viewed
</p>
</head>

<body>
  <div class="flex items-center rounded bg-white shadow-md overflow-hidden mt-10 mr-8 hover:shadow-lg transform transition hover:-translate-y-1">
    {#each counsellorPreview as cardItem}
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Davos Sand">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{cardItem.title}</div>
        <p class="text-gray-700 text-base">
            {cardItem.description}
        </p>
      </div>
    </div>
    {/each}
    <div class="flex-direction: row; rounded-full ">
        <button type="button" class="text-grey-700 border border-grey-700 hover:bg-grey-700 hover:text-black focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-grey-500 dark:text-grey-500 dark:hover:text-black dark:focus:ring-grey-800">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <p class="text-gray-500 text-base">
        See all
    </p>
</div>
</body>
</html>
