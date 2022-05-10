<script lang="ts">
  import { navigate } from 'svelte-routing';

  export let moduleName: string;

  function returnToModules() {
    navigate('/', { replace: true });
  }

  import ChatMessage from '../lib/components/ChatMessage.svelte';

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
    <div class="block p-6 mt-8 mb-8 mx-10 rounded shadow-lg bg-gray-300 w-full">
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
        <a class="tab tab-lg tab-bordered tab-active"><b>Conversation</b></a>
        <a class="tab tab-lg tab-bordered">Chats </a>
        <a class="tab tab-lg tab-bordered">Details </a>
        <a class="tab tab-lg tab-bordered">Email</a>
      </div>
      <div>
        <div class="w-full">
          <div class="relative w-full p-6 overflow-y-auto h-[24rem]">
            <div class="overflow-auto ...">
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
      <div class="block py-2 px-4 rounded-t shadow-lg bg-gray-300 w-full">
        <!-- <div> -->
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >1</button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >2</button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >3</button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >4</button
        >
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          >5</button
        >
        <!-- </div>
      <div class="float-right"> -->
        <button
          on:click={returnToModules}
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out float-right"
          >End Chat</button
        >
        <!-- </div> -->
      </div>
      <!-- Text area -->
      <textarea
        class="form-control block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border 
        border-solid border-gray-300 rounded-b transition ease-in-out focus:text-gray-700 focus:bg-white 
        focus:border-blue-600 focus:outline-none "
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Enter message here..."
      />
    </div>
  </div>
</div>
