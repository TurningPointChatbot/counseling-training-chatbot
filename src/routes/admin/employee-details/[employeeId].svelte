<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const url = `/api/users/${params.employeeId}`;
    const response = await fetch(url);
    console.log(params.employeeId);
    getModulesData({ fetch, params });
    return {
      status: response.status,
      props: {
        foundUser: response.ok && (await response.json()),
        id: params.id
      }
    };
  }


  async function getModulesData({ fetch, params }) {
  try {

    // Select all modules assigned to this employee
    let {data, error} = await supabase.from('chatbot_assignment').select().eq('user_id', employeeId);
    const url = `/api/users/${params.employeeId}`;
    const response = await fetch(url);
    
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
</script>

<script lang="ts">
  import type { user } from '@prisma/client';

  export let foundUser: user;
  export let id: bigint;
  export let modules: module;
  import ModuleBigCard from '$lib/components/dashboard/ModuleBigCard.svelte';
  import CounsellorCard from '$lib/components/dashboard/CounsellorCard.svelte';
  import ModuleOverallProgress from '$lib/components/dashboard/ModuleOverallProgress.svelte';
  import supabase from '$lib/supabase';

//   export let employeeId: string;
  
//   import type { user } from '@prisma/client';

//   export let users: user[];

let employee = {
    name: foundUser.fname + ' ' + foundUser.lname,
    progress: 50,
    profile_image: foundUser.avatar_url,
    position: foundUser.type_id,
    training: 10
  };

  console.log(foundUser);
  console.log(foundUser.chatbot_attempt);

  let totalCompleted = 2;
  let totalModules = foundUser.chatbot_attempt.length;
  let totalHoursDone = 10;
  let targetTrainingHours = 50;

//   for (let i = 0; i < users.length; i++) {
//     employee.name = users[0].fname + ' ' + users[0].lname;
//         employee.profile_image = users[0].avatar_url;
//         employee.position = users[0].type_id;
//   }



// async function loadInEmployee() {
//   try {
//     for (let i = 0; i < users.length; i++) {
//         employee.name = users[0].fname + ' ' + users[0].lname;
//         employee.profile_image = users[0].avatar_url;
//         employee.position = users[0].type_id;
//   }
//   } catch (error) {
//     alert(error.message);
//   }
// }

// async function getUserType(typeId) {
//   try {
//     let {data, error} = await supabase.from('user_type').select().eq('id', typeId);
//     if (data) {
//       return data[0].name
//     } else {
//       return '';
//     }
//   } catch(error) {
//     return '';
//   }
// }

// async function getModulesData() {
//   try {

//     // Select all modules assigned to this employee
//     let {data, error} = await supabase.from('chatbot_assignment').select().eq('user_id', employeeId);

//       if (data) {
//         totalModules = data.length;

//         let modulesDone = 0;
//         for (let i = 0; i < data.length; i++) {
//           if (data[i].completed) {
//             modulesDone += 1;
//           }
//         }

//         totalCompleted = modulesDone;
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   async function getTrainingHours() {
//     try {
//       let { data, error } = await supabase
//         .from('chatbot_attempt')
//         .select()
//         .eq('user_id', employeeId);

//       if (data) {
//         let noOfTrainingHours = 0;
//         for (let i = 0; i < data.length; i++) {
//           if (data[i].completed_at) {
//             noOfTrainingHours += calculateHours(
//               data[i].started_at,
//               data[i].completed_at
//             );
//           }
//         }

//         totalHoursDone = noOfTrainingHours;
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   function calculateHours(startTimeStamp: string, completedTimeStamp: string) {
//     let timeDiff =
//       new Date(completedTimeStamp).getTime() -
//       new Date(startTimeStamp).getTime();
//     return timeDiff / (1000 * 60 * 60);
//   }

// loadInEmployee();
// getModulesData();
// getTrainingHours();

// </script>

<div class="grid grid-cols-2 gap-4 m-8">
  <CounsellorCard employeeData={foundUser} />
    <ModuleOverallProgress
      {totalModules}
      completedModules={2}
      completedHours={totalHoursDone}
      targetHours={targetTrainingHours}
    />
  <div class="col-span-2"><ModuleBigCard /></div>
</div>
