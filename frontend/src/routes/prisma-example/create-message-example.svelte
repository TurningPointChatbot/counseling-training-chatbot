<script lang="ts">
  import type { chatbot_attempt_message } from '@prisma/client';
  import { removeBigInt } from '$lib/helpers';

  async function handleClick() {
    const creation_time = new Date();

    const message: chatbot_attempt_message = {
      attempt_id: BigInt(2),
      created_at: creation_time,
      text: `New message at time ${creation_time.toLocaleTimeString()}`
    };

    const result = await fetch('/api/chatbot_messages', {
      method: 'POST',
      body: JSON.stringify(removeBigInt(message))
    });

    console.log(result);
  }
</script>

<button on:click={handleClick}> Click to send a new message </button>
