<script context="module">
  export async function load({ params }) {
    return { props: { cbmId: params.cbmId } };
  }
</script>

<script lang="ts">
  import LearningOutcomeRow from '$lib/components/LearningOutcomeRow.svelte';
  import { storeChatAttempt } from '$lib/scripts/chatbot_utils';

  export let cbmId: number;
  console.log(cbmId);

  let moduleName: string = 'Addiction and mental health'; // I think it's fine to create the module name from cbmId like this - Linton
  let noOfOutcomes: number = 2; // TODO should not be hardcoded, should pull # of outcomes from database
  let learningOutcomes: Array<any> = [];
  let moduleDescriptions = [
    'Overcoming an addiction can be a long and bumpy road. At times, it may even feel impossible. Learn how to support someone on their journey',
    'Practice speaking with a client who are concerned about their mental health and addiction.'
  ];

  for (let i: number = 1; i <= noOfOutcomes; i++) {
    let outcomeName: string = 'Outcome ' + String(i);
    let description: string = moduleDescriptions[i - 1];
    // retrieve icon here too
    learningOutcomes.push({
      outcomeName: outcomeName,
      description: description
    });
  }

  /**
   * Stores chat attempt and redirects to simulation page with attempt_id and cbm_id params.
   */
  async function runChatbot() {
    // TODO: Replace hardcoded user id with one retrieved at login
    let attemptId: number = await storeChatAttempt(1, cbmId);
    console.log(attemptId);
    location.href = `/chatbot-simulation/${cbmId}/${attemptId}`;
  }

  /**
   * Redirects back to the modules page.
   */
  function returnToModules() {
    location.href = '/counsellor/modules';
  }
</script>

<html lang="en" data-theme="cupcake" />

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="mt-8 mx-52">
  <div class="flex">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:text-left">
        <h2 class="font-semibold uppercase tracking-wide text-primary">
          {moduleName}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
        >
          Learning Outcomes
        </p>
        <div class="mt-10">
          <dl class="space-y-10 md:grid md:gap-x-8 md:gap-y-10 md:space-y-0">
            {#each learningOutcomes as learningOutcome}
              <LearningOutcomeRow {...learningOutcome} />
            {/each}
          </dl>
        </div>
      </div>
      <div class="flex mt-10">
        <!-- <button on:click={returnToModules} class="btn btn-secondary btn-outline ml-10 mt-10 "> -->
        <button
          on:click={returnToModules}
          class="btn btn-secondary m-1 purple-button"
        >
          Return to Modules
        </button>
        <button
          on:click={runChatbot}
          class="btn btn-secondary m-1 purple-button"
        >
          Start Chatbot Simulation
        </button>
      </div>
    </div>
    <div class="flex">
      <img
        class="py-2 mr-20"
        alt={moduleName}
        src="https://images.unsplash.com/photo-1516967124798-10656f7dca28?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
      />
    </div>
  </div>
</div>
