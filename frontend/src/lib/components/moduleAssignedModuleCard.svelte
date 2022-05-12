<script lang="ts">
    import ModuleCardIcon from "../components/moduleCardIcon.svelte";
</script>

<div class="card bg-base-100 shadow-xl">
    <div>
        <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">Assigned Modules</h2>
    </div>
    <hr class="bg-base-400">
    <div class="card-body grid grid-row gap-3 w-full">
        <div class="row"><ModuleCardIcon/></div>
        <div class="row"><ModuleCardIcon/></div>
    </div>
</div>