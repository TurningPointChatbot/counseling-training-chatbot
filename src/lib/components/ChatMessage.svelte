<script lang="ts">
  import { onMount } from "svelte";

  export let sender: string;
  export let content: string;

  const now = new Date(); // for date of messages

  let messageElement: HTMLElement;
  onMount(() => messageElement.scrollIntoView({block: "nearest", inline: "nearest"}));
</script>

<div bind:this={messageElement}>
  {#if sender == 'patient'}
    <li class="flex justify-start">
      <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-base-400 rounded shadow">
        <span class="block">{content}</span>
      </div>
    </li>
    <p style = "color:gray" class="flex justify-start"> {now.toLocaleString()}</p>
  {:else if sender == 'counsellor'}
    <li class="flex justify-end">
      <div
        class="relative max-w-xl px-4 py-2 text-gray-700 bg-blue-light rounded shadow">
        <span class="block">{content}</span>
      </div>
    </li>
    <p style = "color:gray" class = "flex justify-end"> {now.toLocaleString()}</p>
  {/if}
</div>