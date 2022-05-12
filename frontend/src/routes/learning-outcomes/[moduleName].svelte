<script context="module">
  export async function load({ params }) {
    return { props: { moduleName: params.moduleName } };
  }
</script>

<script lang="ts">
  export let moduleName: string;

  function runChatbot() {
    location.href = "/chatbot-simulation/" + moduleName;
  }
</script>

<html lang="en" data-theme="cupcake" />

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
      <p class="text-l mt-4 max-w-2xl text-gray-500 ">
        <b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris vehicula eros ac sapien mattis lobortis. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Morbi suscipit, libero
        a varius placerat, dolor dolor placerat enim, ut rhoncus lorem metus ut
        justo. Fusce sollicitudin tristique urna, quis malesuada leo.
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:grid md:gap-x-8 md:gap-y-10 md:space-y-0">
        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md text-white bg-purple-700"
            >
              <!-- Heroicon name: outline/globe-alt -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
              Outcome 1
            </p>
          </dt>
          <dd class="mt-2 ml-16 max-w-2xl text-base text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md text-white bg-purple-700"
            >
              <!-- Heroicon name: outline/scale -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
              Outcome 2
            </p>
          </dt>
          <dd class="mt-2 ml-16 max-w-2xl text-base text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <button on:click={runChatbot} class="btn btn-primary btn-outline ml-10 mt-10">
    Start Chatbot Simulation
  </button>
</div>
