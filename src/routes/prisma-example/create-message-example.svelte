<script lang="ts">
  import type {
    chatbot_attempt_message_POST,
    chatbot_attempt_POST
  } from '$lib/post_types';

  async function handleClick() {
    const creation_time = new Date();

    const message: chatbot_attempt_message_POST = {
      attempt_id: 2,
      text: `New message at time ${creation_time.toLocaleTimeString()}`,
      message_type: 'user'
    };

    const attempt: chatbot_attempt_POST = {
      user_id: 1,
      cbm_id: 1
    };

    const message_result = await fetch('/api/chatbot-messages', {
      method: 'POST',
      body: JSON.stringify(message)
    });

    const attempt_result = await fetch('/api/chatbot-attempts', {
      method: 'POST',
      body: JSON.stringify(attempt)
    });

    console.log(await message_result.json());

    console.log(await attempt_result.json());
  }
</script>

<button on:click={handleClick}>
  Click to send a new message (and a new attempt!)
</button>
