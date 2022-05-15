<script lang="ts">
import AdminBar from '$lib/components/admin/AdminBar.svelte';
import ModuleBigCard from '$lib/components/dashboard/ModuleBigCard.svelte';
import CounsellorCard from '$lib/components/dashboard/CounsellorCard.svelte';
import ModuleOverallProgress from '$lib/components/dashboard/ModuleOverallProgress.svelte';

let employee = {
  name: 'Davos Sand',
  progress: 50,
  profile_image: 'https://picsum.photos/id/426/400/600.jpg',
  position: "Junior Counsellor",
  tenure: "6 months",
  training: "63"
};
</script>

<AdminBar>
  <h1 class="m-8">Dashboard</h1>
  <div class="grid grid-cols-2 gap-4 m-8">
    <div class="..."><CounsellorCard employeeData={employee} /></div>
    <div class="..."><ModuleOverallProgress /></div>
    <div class="col-span-2 ..."><ModuleBigCard /></div>
  </div>
</AdminBar>
