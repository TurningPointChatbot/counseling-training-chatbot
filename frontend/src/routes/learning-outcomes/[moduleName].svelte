<script context="module">
  export async function load({ params }) {
    return { props: { moduleName: params.moduleName } };
  }
</script>

<script lang='ts'>
  import LearningOutcomeRow from "$lib/components/LearningOutcomeRow.svelte";
  import CounsellorBar from '$lib/components/CounsellorBar.svelte';
  
  let noOfModules:number = 2; // TODO should not be hardcoded, should pull # of modules from modules
  let learningOutcomes:Array<any> = [];

  for (let i:number = 1; i<=noOfModules; i++){
      let outcomeName:string = 'Outcome ' + String(i);
      let description:string = 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque in dui non volutpat. Suspendisse non turpis eget purus viverra sollicitudin. Morbi nulla nisi, consequat non neque vel, scelerisque porta orci. Aenean vitae neque imperdiet tellus cursus ornare. Etiam dignissim pellentesque fermentum. Etiam feugiat nibh vel mattis eleifend. Praesent orci.';
      // retrieve icon here too
      learningOutcomes.push({outcomeName: outcomeName, description: description})
  }

  export let moduleName: string;
  //import CounsellorBar from '$lib/components/CounsellorBar.svelte';

  function runChatbot() {
    location.href = '/chatbot-simulation/' + moduleName;
  }
</script>

<html lang="en" data-theme="cupcake" />

<CounsellorBar>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12 my-12 mx-52 border-solid border border-gray-300">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="lg:text-left">
      <h2
        class="text-base font-semibold uppercase tracking-wide text-purple-700"
      >
        {moduleName}: Module Title
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
      >
        Learning Outcomes
      </p>
    <div class="mt-10">
      <dl class="space-y-10 md:grid md:gap-x-8 md:gap-y-10 md:space-y-0">
        {#each learningOutcomes as learningOutcome}
          <LearningOutcomeRow {...learningOutcome}/>
        {/each}
      </dl>
    </div>
  </div>
  <button on:click={runChatbot} class="btn btn-primary btn-outline ml-10 mt-10">
    Start Chatbot Simulation
  </button>
</div>
</CounsellorBar>