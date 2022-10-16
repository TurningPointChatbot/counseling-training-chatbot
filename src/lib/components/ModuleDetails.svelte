<script lang="ts">
    import FilterableList from '$lib/components/FilterableList.svelte';
    import Icon from '$lib/components/Icon.svelte';
    import { getContext } from 'svelte';
    import AssignForm from './assign-module/AssignForm.svelte';
  
    const { open } = getContext('simple-modal'); // Ignore any red underline under 'open'
    const showAssignForm = () => open(AssignForm,  { counsellors: counsellors }, {closeOnOuterClick: false, closeOnEsc: false});
  
    export let module: any;
    export let assignedCounsellors = [];
    export let moduleId: string;
    export let counsellors = [];
  </script>


  <div class="m-5 h-full">
    <h1>{module.title}</h1>
    <div class="mt-5">{module.description}</div>
    <div class="flex items-center justify-center mt-5">
      <a href="/learning-outcomes/{moduleId}" rel="prefetch">
        <button class="btn btn-wide btn-success text-white text-lg"
          >Preview</button
        >
      </a>
    </div>
    <div class="mt-5"><h2>Assigned Counsellors</h2></div>
    <div class="flex justify-between m-3">
        <div class="mt-3 w-3/4 h-3/5">
        <FilterableList listData={assignedCounsellors} />
        </div>
        <div class="mt-14 mr-20">
            <button class="btn bg-base-400" on:click={showAssignForm}>
                <span class="text-black mr-3">Assign</span>
                <Icon
                imgPath="/plus.png"
                altText="Assign"
                width="20px"
                height="20px"/>
            </button>
        </div>
    </div>
  </div>