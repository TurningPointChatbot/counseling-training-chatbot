<script context="module">
export async function load({ params }) {
  return { props: { moduleId: params.moduleId } };
}
</script>


<script lang="ts">
import AdminBar from '$lib/components/admin/AdminBar.svelte';
import FilterableList from '$lib/components/FilterableList.svelte';

export let moduleId: string;

// TODO: Retrieve module by moduleId.
let module = {
  title: 'Lesson 101: Counselling Basics',
  description: `More detailed module description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis rutrum nibh, 
  et eleifend purus interdum eu. Nulla vitae libero vitae lorem viverra ultrices nec ac mauris. Etiam luctus malesuada sapien, vitae 
  vestibulum quam finibus eu. Curabitur quis dictum neque.\nLearning Outcomes: \nLorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Ut facilisis rutrum nibh, et eleifend purus interdum eu. Nulla vitae libero vitae lorem viverra ultrices nec ac mauris. \nLorem ipsum dolor sit 
  amet, consectetur adipiscing elit. Ut facilisis rutrum nibh, et eleifend purus interdum eu. Nulla vitae libero vitae lorem viverra ultrices 
  nec ac mauris.`
}

// TODO: Retrieve counsellor module progress from database.
let modules = [{
    title: 'Davos Sand',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Abigail Constantine',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Patrick Tran',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Evelyn Chua',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  }
];
</script>

<AdminBar>
  <div class="m-5 h-full">
    <div><h1>{module.title}</h1></div>
    <div class="mt-5">{module.description}</div>
    <div class="flex items-center justify-center mt-5">
      <a href="/learning-outcomes/{module.title}" rel="prefetch">
        <button class="btn btn-wide btn-success text-white text-lg">Preview</button>
      </a>
    </div>
    <div class="mt-5"><h2>Assigned Counsellors</h2></div>
    <div class="mt-3 w-3/4 h-3/5">
      <FilterableList listData={modules} />
    </div>
  </div>
</AdminBar>
