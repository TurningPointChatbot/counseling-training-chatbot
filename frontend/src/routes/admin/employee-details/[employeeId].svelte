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
  name: 'Davos Sand',
  progress: 50,
  profile_image: 'https://picsum.photos/id/426/400/600.jpg',
  position: "Junior Counsellor"
};

let totalCompleted = 1;
let totalModules = 2;
let totalHoursDone = 10;
let targetTrainingHours = 100;

async function loadInEmployee() {
  try {
    let {data, error} = await supabase.from('user').select().eq('id', employeeId);
    if (data) {
        employee.name = data[0].fname + ' ' + data[0].lname;
        employee.profile_image = data[0].avatar_url;
        employee.position = await getUserType(data[0].type_id)
    }
  } catch (error) {
    alert(error.message);
  }
}

async function getUserType(typeId) {
  try {
    let {data, error} = await supabase.from('user_type').select().eq('id', typeId);
    if (data) {
      return data[0].name
    } else {
      return '';
    }
  } catch(error) {
    return '';
  }
}

async function getModulesData() {
  try {

    // Select all modules assigned to this employee
    let {data, error} = await supabase.from('chatbot_assignment').select().eq('user_id', employeeId);

    if (data) {
      totalModules = data.length;

      // Count the number of modules done
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

    // Get all chatbot attempts from this employee to count his training hours from the attempts.
    let {data, error} = await supabase.from('chatbot_attempt').select().eq('user_id', employeeId);

    if (data) {

      let noOfTrainingHours = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].completed_at) {
          noOfTrainingHours += calculateHours(data[i].started_at, data[i].completed_at);
        }
      }

      totalHoursDone = noOfTrainingHours;
    }
  } catch (error) {
    alert(error.message);
  }
}

function calculateHours(startTimeStamp: string, completedTimeStamp: string) {
  let timeDiff = new Date(completedTimeStamp).getTime() - new Date(startTimeStamp).getTime();
  return timeDiff / (1000 * 60 * 60);
}

loadInEmployee();
getModulesData();
getTrainingHours();

</script>

  <h1 class="m-8">{employee.name}</h1>
  <div class="grid grid-cols-2 gap-4 m-8">
    <div class="..."><CounsellorCard employeeData={employee} {totalHoursDone}/></div>
    <div class="..."><ModuleOverallProgress {totalModules} completedModules={totalCompleted}
      completedHours={totalHoursDone} targetHours={targetTrainingHours}/></div>
    <div class="col-span-2 ..."><ModuleBigCard /></div>
  </div>