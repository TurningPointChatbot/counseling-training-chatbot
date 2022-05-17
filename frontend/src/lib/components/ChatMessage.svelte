<script lang="ts">
  export let sender: string;
  export let content: string;
</script>

{#if sender == 'patient'}
  <li class="flex justify-start">
    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-base-400 rounded shadow">
      <span class="block">{content}</span>
    </div>
  </li>
{:else if sender == 'counsellor'}
  <li class="flex justify-end">
    <div
      class="relative max-w-xl px-4 py-2 text-gray-700 bg-blue-light rounded shadow"
    >
      <span class="block">{content}</span>
    </div>
  </li>
{/if}
