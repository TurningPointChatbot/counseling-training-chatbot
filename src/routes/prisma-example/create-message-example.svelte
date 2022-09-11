<script lang="ts">
  import { removeBigInt } from '$lib/helpers';
  import type { chatbot_attempt_message_POST } from '$lib/post_types';

  async function handleClick() {
    const creation_time = new Date();

    const message: chatbot_attempt_message_POST = {
      attempt_id: 2,
      text: `New message at time ${creation_time.toLocaleTimeString()}`,
      message_type: 'user'
    };

    const result = await fetch('/api/chatbot_messages', {
      method: 'POST',
      body: JSON.stringify(removeBigInt(message))
    });

    console.log(result);
  }
</script>

<button on:click={handleClick}> Click to send a new message </button>
