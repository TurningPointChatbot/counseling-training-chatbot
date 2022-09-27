<script context="module">
    export async function load({ params }) {
      return { props: { moduleName: params.moduleName } };
    }
</script>

<script type="ts">
    let message: string = null;
    let textArea: string = null;
</script>

<div class="flex justify-center my-1">
    <div class="mb-3 w-full mx-10">
      <!-- Buttons for text-->
      <div class="block py-2 px-4 rounded-t shadow-lg bg-base-300 w-full">
        <!-- <div> -->
        <button
          type="button"
          class="rounded inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
          on:click = {makeBold}
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
          on:click={returnToModules}
          type="button"
          class="btn-outline rounded inline-block px-6 py-2.5 bg-error text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out float-right"
          >End Chat</button
        >
        <button
          on:click={sendMessage}
          type="button"
          class="btn-outline rounded inline-block px-6 py-2.5 mr-6 bg-success text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out float-right"
          >Post Message</button
        >
      </div>
      <!-- Text area -->
      <textarea
        class="form-control block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border 
        border-solid border-gray-300 rounded-b transition ease-in-out focus:text-gray-700 focus:bg-white 
        focus:border-blue-600 focus:outline-none mt-4"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Post On Forum"
        bind:value = {message}
        bind:this = {textArea}
      />
    </div>
  </div>