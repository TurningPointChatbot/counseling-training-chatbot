<script context="module">
  export async function load({ params, fetch }) {
    const url = `/api/chatbot-attempts/attempt_id=${params.attemptId}&messages=true`;
    const response = await fetch(url, {method: 'GET'});

    return {
      status: response.status,
      props: {
        cbmId: params.cbmId,
        attemptId: params.attemptId,
        messages: response.ok && (await response.json())
      }
    };
  }
</script>

<script lang="ts">
  import ChatMessage from '$lib/components/ChatMessage.svelte';
  import { Chatbot } from '$lib/scripts/chatbot';
  import { storeMessage } from '$lib/scripts/chatbot_utils';
  import type { chatbot_assignment_PATCH } from '$lib/patch_types';
  import type { chatbot_assignment } from '@prisma/client';

  export let cbmId: number;
  export let attemptId: number;
  export let messages; 
  console.log(messages);

  interface DisplayMessage {
    sender: string;
    content: string;
  }
  let userMessageText: string = null;
  let displayMessages: Array<DisplayMessage> = [];
  let chatbot: Chatbot;
  let moduleName: string = "Module " + cbmId;

  // Creates a new chatbot instance
  chatbot = new Chatbot(attemptId);

  /** Stores counsellor message and displays it in UI. I made it async so that message order is preserved 
   * i.e. User message is created and stored before chatbot message is created.
  */
  async function sendCounsellorMessage() {
    if (userMessageText != null) {
      displayMessages = [
        ...displayMessages,
        { sender: 'counsellor', content: userMessageText }
      ];
      await storeMessage(attemptId, userMessageText, 'user');
      userMessageText = null;
      await sendChatbotMessage();
    }
  }

  async function sendChatbotMessage() {
    let displayMessage: DisplayMessage = await chatbot.sendAiMessage();
    displayMessages = [...displayMessages, displayMessage];
  }

  async function handlePATCHClick() {
    // grab an existing assignment
    let json_data = await (
      await (await fetch('/api/chatbot-assignments/user_id=1')).json()
    );
    
    var old_assignment;
    for (let i =0; i < Object.keys( json_data ).length; i++) {
      if (json_data[i].cbm_id == cbmId) {
        old_assignment = await ( await (await fetch('/api/chatbot-assignments/user_id=1')).json())[i];
      }
    }

    console.log('old assignment');
    console.log(old_assignment);

    // modify it a bit
    const changed_assignment: chatbot_assignment_PATCH = {
      cbm_id: old_assignment.cbm_id,
      user_id: old_assignment.user_id,
      created_at: old_assignment.created_at,
      completed_at: new Date(),
      completed: true,
      attempt_id: old_assignment.attempt_id
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

  async function modulesRoute() {
    await handlePATCHClick(); // Calling function to mark module as completed
    location.href = '/counsellor/modules';
  }
</script>

<html lang="en" data-theme="cupcake" />

<div class="w-5/6 mx-28">
  <!-- Header -->
  <div class="flex justify-center">
    <div class="block p-6 mt-8 mb-8 mx-10 rounded shadow-lg bg-base-300 w-full">
      <h5 class="text-gray-900 text-xl leading-tight font-medium">
        {moduleName}
      </h5>
    </div>
  </div>

  <!--Chatting Area-->
  <div class="container px-10 w-full">
    <div class="max-w-full border rounded">
      <div>
        <div class="w-full">
          <div class="relative w-full p-6 overflow-y-auto h-[24rem]">
            <div class="overflow-auto ...">
              <ul class="space-y-2">
                <!-- Messags are being displayed here -->
                {#each displayMessages as message}
                  <ChatMessage {...message} />
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center my-1">
    <div class="mb-3 w-full mx-10">
      <!-- Buttons for text-->
      <div class="block py-2 px-4 rounded-t shadow-lg bg-base-300 w-full">
        <!-- <div> -->
        <button
          on:click={sendCounsellorMessage}
          type="button"
          class="btn-outline rounded inline-block px-6 py-2.5 mr-6 bg-success text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >Send Message</button
        >
        <button
          on:click={modulesRoute}
          type="button"
          class="btn-outline rounded inline-block px-6 py-2.5 bg-error text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out float-right"
          >End Chat</button
        >
      </div>
      <!-- Text area -->
      <textarea
        class="form-control block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border 
        border-solid border-gray-300 rounded-b transition ease-in-out focus:text-gray-700 focus:bg-white 
        focus:border-blue-600 focus:outline-none "
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Enter message here..."
        bind:value={userMessageText}
      />
    </div>
  </div>
</div>
