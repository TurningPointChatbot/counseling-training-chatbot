<script lang="ts">
    export let outcomeName: string;
    export let description: string;
    //export let icon: ???;
</script>

<div class="relative">
    <dt>
      <div
        class="absolute flex h-12 w-12 items-center justify-center rounded-md text-white bg-primary"
      >
        <!-- Heroicon name: outline/globe-alt -->
        <!-- need to make icons attached to module, not hard coded -->
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
      <p>
        {outcomeName}
      </p>
    </dt>
    <dd>
      {description}
    </dd>
  </div>
