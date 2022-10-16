<script lang="ts">
  import FilterableList from '$lib/components/FilterableList.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { getContext } from 'svelte';
  import ModuleForm from './create-module/ModuleForm.svelte';

  const { open } = getContext('simple-modal'); // Ignore any red underline under 'open'
  const showModuleForm = () => open(ModuleForm, { counsellors: counsellors }, {closeOnOuterClick: false, closeOnEsc: false});

  export let chatbotModules = [];
  export let counsellors = [];
</script>

<div class="flex justify-between m-3">
  <h1>Modules</h1>
  <div>
    <button class="btn bg-base-400" on:click={showModuleForm}>
      <span class="text-black mr-3">New module</span>
      <Icon
        imgPath="/plus.png"
        altText="New module"
        width="20px"
        height="20px"/>
    </button>
  </div>
</div>
<div class="m-3 h-3/4">
  <FilterableList listData={chatbotModules}/>
</div>