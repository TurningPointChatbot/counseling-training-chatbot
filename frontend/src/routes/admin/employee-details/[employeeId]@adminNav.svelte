<script context="module">
  export async function load({ params }) {
    return { props: { employeeId: params.employeeId } };
  }
</script>

<script lang="ts">
  import ModuleBigCard from '$lib/components/dashboard/ModuleBigCard.svelte';
  import CounsellorCard from '$lib/components/dashboard/CounsellorCard.svelte';
  import ModuleOverallProgress from '$lib/components/dashboard/ModuleOverallProgress.svelte';
  import supabase from '$lib/supabase';

  export let employeeId: string;

  let employee = {
    name: 'Blake Sand',
    progress: 50,
    profile_image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
    position: 'Junior Counsellor',
    training: 10
  };

  let totalCompleted = 2;
  let totalModules = 5;
  let totalHoursDone = 10;
  let targetTrainingHours = 50;

  async function getModulesData() {
    try {
      let { data, error } = await supabase
        .from('chatbot_assignment')
        .select()
        .eq('user_id', employeeId);

      if (data) {
        totalModules = data.length;

        let modulesDone = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].completed) {
            modulesDone += 1;
          }
        }

        totalCompleted = modulesDone;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function getTrainingHours() {
    try {
      let { data, error } = await supabase
        .from('chatbot_attempt')
        .select()
        .eq('user_id', employeeId);

      if (data) {
        let noOfTrainingHours = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].completed_at) {
            noOfTrainingHours += calculateHours(
              data[i].started_at,
              data[i].completed_at
            );
          }
        }

        totalHoursDone = noOfTrainingHours;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function calculateHours(startTimeStamp: string, completedTimeStamp: string) {
    let timeDiff =
      new Date(completedTimeStamp).getTime() -
      new Date(startTimeStamp).getTime();
    return timeDiff / (1000 * 60 * 60);
  }

  getModulesData();
  getTrainingHours();
</script>

<div class="grid grid-cols-2 gap-4 m-8">
  <div class="..."><CounsellorCard employeeData={employee} /></div>
  <div class="...">
    <ModuleOverallProgress
      {totalModules}
      completedModules={2}
      completedHours={totalHoursDone}
      targetHours={targetTrainingHours}
    />
  </div>
  <div class="col-span-2 ..."><ModuleBigCard /></div>
</div>
