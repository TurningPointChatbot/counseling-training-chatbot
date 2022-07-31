<script context="module">
  export async function load({ params }) {
    return { props: { moduleId: params.moduleId } };
  }
</script>

<script lang="ts">
  import FilterableList from '$lib/components/FilterableList.svelte';

  export let moduleId: string;

  // TODO: Retrieve module by moduleId.
  let module = {
    title: 'Module 101: Empathy',
    description: `Empathy is the ability to emotionally understand what other people feel, see things from their point of view, and 
  imagine yourself in their place. Essentially, it is putting yourself in someone else\'s position and feeling what they must be feeling.
  More and more, we live in bubbles. Most of us are surrounded by people who look like us, vote like us, earn like us, spend money like 
  us, have educations like us and worship like us. The result is an empathy deficit, and it\'s at the root of many of our biggest problems. It\'s because of how homogeneous people\'s social circles have become, and also because humans naturally hold biases. But researchers have discovered that far from being an immutable trait, empathy can be developed. There are steps people can take to acknowledge their biases and to move beyond their own worldviews to try to understand those held by other people. Bonus: You\'ll make new friends along the way.`
  };

  // TODO: Retrieve counsellor module progress from database.
  let modules = [
    {
      title: 'Blake Sand',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Sam Chua',
      description: 'Senior Counsellor',
      image:
        'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Aiden Howard',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Winter Tyler',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Riley White',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    }
  ];
</script>

<div class="m-5 h-full">
  <div><h1>{module.title}</h1></div>
  <div class="mt-5">{module.description}</div>
  <div class="flex items-center justify-center mt-5">
    <a href="/learning-outcomes/{module.title}" rel="prefetch">
      <button class="btn btn-wide btn-success text-white text-lg"
        >Preview</button
      >
    </a>
  </div>
  <div class="mt-5"><h2>Assigned Counsellors</h2></div>
  <div class="mt-3 w-3/4 h-3/5">
    <FilterableList listData={modules} />
  </div>
</div>
