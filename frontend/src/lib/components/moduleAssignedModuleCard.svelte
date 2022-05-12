<script>
    import ModuleCard from "../components/moduleCardIcon.svelte";
</script>

<div class="card bg-base-100 shadow-xl">
    <div>
        <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">Assigned Modules</h2>
    </div>
    <hr class="bg-base-400">
    <div class="card-body grid grid-row gap-3 w-full">
        <p>2/5/2022</p><div class="col-span-3"><ModuleCard moduleCard = {ModuleCard}/></div>
        <p>2/5/2022</p><div class="col-span-3"><ModuleCard moduleCard = {ModuleCard}/></div>
    </div>
</div>