<script lang="ts">
    import TimeRemaining from "../components/timeRemaining.svelte";
    import ModProgress from "../components/modProgress.svelte";
    export let ModuleOverallProgress;
</script>

<div class="card bg-base-100 shadow-xl">
    <div>
        <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">Overall Progress</h2>
    </div>
    <hr class="bg-base-400">
    <div class="card-body grid grid-row gap-3 w-full">
        <div class="card-body grid grid-cols-20 gap-3 w-full">
            <div class="row"><ModProgress moduleProgress = {ModProgress}/></div>
        </div>
        <div class="card-body grid grid-cols-20 gap-3 w-full">
            <div class="row"><TimeRemaining timeRemaining = {TimeRemaining}/></div>
        </div>
    </div>
</div>

<!-- <div class="card bg-base-100 shadow-xl">
    <div>
        <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">Overall Progress</h2>
    </div>
    <hr class="bg-base-400">
    <div class="card-body grid grid-row gap-3 w-full">
        <div class="row"> Module Completion
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style="width: 25%">25%</div>
            </div>
            <div class = "font-xs text-base-400">{modPrint}</div>
        </div>
        <div class="row">Target Training Time
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style="width: 88%">88%</div>
            </div>
        </div>
    </div>
</div> -->

