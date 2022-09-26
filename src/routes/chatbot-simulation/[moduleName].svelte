<script context="module">
  export async function load({ params, fetch }) {
    let attempt_id = 10;
    const url = `/api/chatbot-attempts/attempt_id=${attempt_id}&messages=true`;
    const response = await fetch(url, {method: 'GET'});

    return {
      status: response.status,
      props: {
        moduleName: params.moduleName,
        messages: response.ok && (await response.json()),
        attempt_id: attempt_id
      }
    };
  }
</script>

<script lang="ts">
  import ChatMessage from '$lib/components/ChatMessage.svelte';
  import { Chatbot } from '$lib/scripts/chatbot';
  import { storeMessage } from '$lib/scripts/chatbot_utils';

  export let messages; 
  console.log(messages);
  export let moduleName: string;
  export let attempt_id: number;

  interface DisplayMessage {
    sender: string;
    content: string;
  }
  let userMessageText: string = null;
  let displayMessages: Array<DisplayMessage> = [];
  let chatbot: Chatbot;

  // Creates a new chatbot instance
  chatbot = new Chatbot(attempt_id);

  function sendCounsellorMessage() {
    if (userMessageText != null) {
      displayMessages = [
        ...displayMessages,
        { sender: 'counsellor', content: userMessageText }
      ];
      storeMessage(attempt_id, userMessageText, 'user');
      userMessageText = null;
      sendChatbotMessage();
    }
  }

  function sendChatbotMessage() {
    let displayMessage: DisplayMessage = chatbot.sendMessageWebchatExample1();
    displayMessages = [...displayMessages, displayMessage];
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
          on:click={() => (location.href = '/counsellor/modules')}
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
