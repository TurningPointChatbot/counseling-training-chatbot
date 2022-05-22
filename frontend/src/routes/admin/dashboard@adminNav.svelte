<script lang="ts">
  import RecentModules from '$lib/components/RecentModules.svelte';
  let counsellorPreview = [
    {
      title: 'Blake Sand',
      description: 'Junior Counsellor',
      image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Sam Chua',
      description: 'Senior Counsellor',
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Aiden Howard',
      description: 'Junior Counsellor',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Winter Tyler',
      description: 'Junior Counsellor',
      image: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Riley White',
      description: 'Junior Counsellor',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    }
  ];
  let trainingModules = [
    {
      title: 'Module 101: Empathy',
      description:
        'Empathy is the ability to emotionally understand what other people feel, see things from their point of view, and imagine yourself in their place. Essentially, it is putting yourself in someone else\'s position and feeling what they must be feeling.',
      image: 'https://images.unsplash.com/photo-1516967124798-10656f7dca28?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
      dateAccessed: new Date('April 13, 2022 11:15:00'),
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Module 102: Treatment Options',
      description:
        'There are a range of gambling treatment and support services available in Australia, many of which are free. If you or someone you know is affected by addiction, the first step to getting help is talking to someone.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
      dateAccessed: new Date('April 3, 2022 11:13:00'),
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Module 103: Alcohol & drugs',
      description:
        'There are a range of alcohol and other drug related treatment and support services available in Australia, many of which are free. If you or someone you know is affected by addiction, the first step to getting help is talking to someone.',
      image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
      dateAccessed: new Date('April 13, 2022 11:13:00'),
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Module 104: Withdrawal',
      description:
        'There are a range of physical and psychological symptoms people can experience when reducing, or stopping, alcohol and other drugs. Here\'s how it works and how to manage it.',
      image: 'https://images.unsplash.com/photo-1516027828283-84217f09f3c4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728',
      dateAccessed: new Date('April 23, 2022 11:13:00'),
      href: '/admin/module-details/moduleId'
    }
  ];
</script>

<div class="m-3">
  <h1>Dashboard</h1>
</div>
<RecentModules listData={trainingModules} />
<div class="card-bordered m-3">
  <div id="title" class="font-bold text-xl mb-2 text-gray-700">
    Counsellors
  </div>
  <div id="subtitle" class="text-gray-400 text-base">Recently viewed</div>
  <div
    class="flex items-center rounded bg-white overflow-hidden h-90 w-90 mt-4 mr-8 transform transition"
  >
    {#each counsellorPreview as cardItem}
      <!--Card 1-->
      <a href={cardItem.href}>
        <div class="flex flex-col items-center px-3 pr-5 overflow-hidden hover:-translate-y-1">
          <img
            class="rounded-full h-32 w-32"
            src={cardItem.image}
            alt={cardItem.title}
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              <button
                type="button"
                class="font-small text-gray-900 bg-white rounded-full focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-black center"
                >{cardItem.title}</button
              >
            </div>
          </div>
        </div>
      </a>
    {/each}
    <div class="flex flex-col justify-center">
      <a href="/admin/counsellors" rel="prefetch" class="nav-link">
        <div class="flex-direction: row; rounded-full ">
          <button
            type="button"
            class="text-grey-700 border border-grey-700 hover:bg-grey-700 hover:text-black focus:ring-1 focus:ring-grey-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-grey-500 dark:text-grey-500 dark:hover:text-black dark:focus:ring-grey-800"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              /></svg
            >
          </button>
        </div>
      </a>
      <p class="text-gray-500 text-base text-center">See all</p>
    </div>
  </div>
</div>

<style>
  #title {
    position: relative;
    left: 30px;
    top: 10px;
  }
  #subtitle {
    position: relative;
    left: 30px;
    top: 5px;
  }
</style>