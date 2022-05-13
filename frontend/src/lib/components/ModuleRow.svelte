<script lang="ts">
  export let moduleName: string;
  export let dueDate: string;
  export let progress: number;
  export let description: string;

  function runModule() {
    location.href = '/learning-outcomes/' + moduleName;
  }
</script>

<div class="grid-flow-col gap-8 my-4">
  <div
    tabindex="0"
    class="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box"
    style="color:black"
  >
    <input type="checkbox" />
    <div class="collapse-title text-2xl font-medium">
      <div class="grid grid-cols-3 gaps-4">
        <div>{moduleName}</div>
        <div>{dueDate}</div>
        <div>
          {#if progress < 100}
            <!-- Progress Bar -->
            <div class="w-full bg-gray-200 rounded dark:bg-gray-700">
              <div
                class="bg-blue-400 text-s font-medium text-blue-100 text-center p-0.5 leading-none rounded"
                style="width: {String(progress)}%"
              >
                {String(progress)}%
              </div>
            </div>
          {:else}
            <!-- Completed Module Icon -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="collapse-content">
      <h2><b> {description} </b></h2>
      <div class="text-right">
        <button on:click={runModule} class="btn-highlight btn-icon">
          <div class="svgicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="60"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </div>
          <b>Run Module</b>
        </button>
      </div>
    </div>
  </div>
</div>
