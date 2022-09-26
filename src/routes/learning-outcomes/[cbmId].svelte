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

  let moduleName: string = 'Module ' + cbmId; // I think it's fine to create the module name from cbmId like this - Linton
  let noOfOutcomes: number = 2; // TODO should not be hardcoded, should pull # of outcomes from database
  let learningOutcomes: Array<any> = [];
  let moduleDescriptions = [
    'We all have innate biases, most commonly centred around our race, gender, age or other visible features. These biases curb our ability to empathize with others as they cause false perceptions (e.g. everyone of the opposite gender are not fit to be leaders), which in turn influences our actions. Such biases also make us less willing to try to empathize with people from different backgrounds or experiences. Many of our biases are unconscious, but one way to learn what biases you hold is to take an unconscious bias quiz.',
    'To make an empathetic connection with someone, it must go both ways – simply listening to them does not forge this connection. Instead, when people open up to you about their feelings, view it as an opportunity for you to identify with them and be vulnerable to them. Take the time to listen to them actively to understand where they are coming from without trying to problem solve right away. You might not have been in their exact position, but you can imagine or think back to a time where you had similar feelings and emotions.'
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
<div class="py-12 my-12 mx-52">
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
      <div class="flex">
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
