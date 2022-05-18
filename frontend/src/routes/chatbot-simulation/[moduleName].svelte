<script context="module">
  export async function load({ params }) {
    return { props: { moduleName: params.moduleName } };
  }
</script>

<script lang="ts">
  export let moduleName: string;

  let message: string = null;
  let messageArea;

  function returnToModules() {
    location.href = '/modules';
  }
  
  function sendMessage() {
    if(message != null)
    messages = [...messages, { sender: 'counsellor', content: message}];
  }

  import ChatMessage from '../../lib/components/ChatMessage.svelte';

  // Array containing dictionary of messages. Currently all hardcoded in.
  // Will require
  let messages: Array<any> = [];
  messages.push({ sender: 'patient', content: 'Hi' });
  messages.push({ sender: 'counsellor', content: 'Hiii' });
  messages.push({ sender: 'patient', content: 'I am alcoholic' });
  messages.push({ sender: 'counsellor', content: 'okay' });
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
      <!--Tabs-->
      <div class="tabs">
        <p class="tab tab-lg tab-bordered tab-active"><b>Conversation</b></p>
        <p class="tab tab-lg tab-bordered">Chats</p>
        <p class="tab tab-lg tab-bordered">Details</p>
        <p class="tab tab-lg tab-bordered">Email</p>
      </div>
      <div>
        <div class="w-full">
          <div class="relative w-full p-6 overflow-y-auto h-[24rem]">
            <div bind:this={messageArea} class="overflow-auto ...">
              <ul class="space-y-2">
                <!-- Messags are being displayed here -->
                {#each messages as message}
                  <ChatMessage {...message} />
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center my-4">
    <div class="mb-3 w-full mx-10">
      <!-- Buttons for text-->
      <div class="block py-2 px-4 rounded-t shadow-lg bg-base-300 w-full">
        <!-- <div> -->
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          ><b>B</b></button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          ><i>I</i></button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          ><u>U</u></button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >4</button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >5</button
        >
        <button
          on:click={returnToModules}
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-error text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out float-right"
          >End Chat</button
        >
        <button
          on:click={sendMessage}
          type="button"
          class="rounded inline-block px-6 py-2.5 mr-6 bg-red text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out float-right"
          >Send Message</button
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
        bind:value = {message}
      />
    </div>
  </div>
</div>
