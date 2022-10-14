<script lang="ts">
  import type {
    chatbot_attempt_message_POST,
    chatbot_attempt_POST,
    chatbot_module_POST
  } from '$lib/post_types';

  import type { chatbot_assignment_PATCH } from '$lib/patch_types';

  import type { chatbot_assignment } from '@prisma/client';


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

    const module: chatbot_module_POST = {
      title: 'Sample title!',
      description: `Sample description created at ${creation_time.toLocaleTimeString()}`
    };

    const message_result = await fetch('/api/chatbot-messages', {
      method: 'POST',
      body: JSON.stringify(message)
    });

    const attempt_result = await fetch('/api/chatbot-attempts', {
      method: 'POST',
      body: JSON.stringify(attempt)
    });

    const module_result = await fetch('/api/modules/chatbot', {
      method: 'POST',
      body: JSON.stringify(module)
    });

    console.log(await message_result.json());

    console.log(await attempt_result.json());

    console.log(await module_result.json());
  }

  async function handlePATCHClick() {
    // grab an existing assignment
    let old_assignment = await (
      await (await fetch('/api/chatbot-assignments/user_id=35')).json()
    )[0];

    console.log('old assignment');
    console.log(old_assignment);

    // modify it a bit
    const changed_assignment: chatbot_assignment_PATCH = {
      cbm_id: old_assignment.cbm_id,
      user_id: old_assignment.user_id,
      created_at: old_assignment.created_at,
      completed_at: new Date(),
      completed: true,
      attempt_id: 183
    };

    // throw it to the patch endpoint
    const modified_assignment: chatbot_assignment = await (
      await fetch('/api/chatbot-assignments', {
        method: 'PATCH',
        body: JSON.stringify(changed_assignment)
      })
    ).json();

    console.log('modified assignment');
    console.log(modified_assignment);
  }
</script>

<button on:click={handleClick}>
  Click to send a new message (and a new attempt!)
</button>

<button on:click={handlePATCHClick}>
  Click to update an assignment record!
</button>