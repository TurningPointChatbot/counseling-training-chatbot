<script lang="ts">
  import CounsellorBar from '$lib/components/CounsellorBar.svelte';
  import ModuleRow from '../lib/components/ModuleRow.svelte';
  import supabase from '$lib/supabase';
  import userStore from '../stores/authStore';

  let session;
  let user;
  // Array containing array of module values [[moduleName, dueDate, progress, description], ...]
  // eg. [['Module 1', '17/08/22', 45, 'Lorem ipsum...'], ...]
  let userModules: Array<any> = [];

  async function getModulesForUser(user) {
    console.log(user);
    try {
      let { data, error } = await supabase
        .from('user')
        .select(
          ` 
        id,
        email,
        chatbot_assignment(
          user_id,
          duedate,
          created_at,
          completed_at,
          completed
        ),
        chatbot_module!chatbot_assignment(
          title, 
          description
        )
        `
        )
        .eq('email', user.email)
        .single();
      if (error) throw error;
      if (data) {
        console.log(data);
        let assignments = data.chatbot_assignment;
        for (let i: number = 0; i < assignments.length; i++) {
          let moduleName: string = 'Module ' + String(i + 1);
          let dueDate: string = assignments[i].duedate;
          let progress: number = (i + 1 + 2) * 10;
          let description: string = data.chatbot_module[i].description;
          userModules.push({
            moduleName: moduleName,
            dueDate: dueDate,
            progress: progress,
            description: description
          });
        }
      }
      userModules = userModules;
    } catch (error) {
      console.log(error.hint);
      console.log(error.details);
    }
  }

  userStore.subscribe((value) => {
    // session
    console.log('---session---');
    session = supabase.auth.session();
    console.log(session);

    // user
    user = value;
    console.log('---user---');
    console.log(user);
  });

  (async () => {
    await getModulesForUser(user);
  })();
</script>

<html lang="en" data-theme="cupcake" />
<CounsellorBar>
  <!--Header-->
  <div class="grid-flow-col gap-8 my-4">
    <div
      tabindex="0"
      class="collapse collapse-close border border-base-300 bg-base-100 rounded-box"
      style="background-color:#852E82; color:white"
    >
      <div class="collapse-title text-2xl font-medium">
        <div class="grid grid-cols-3 gaps-4">
          <div>Module Name</div>
          <div>Due Date</div>
          <div>Status</div>
        </div>
      </div>
    </div>
  </div>

  {#each userModules as module}
    <ModuleRow {...module} />
  {/each}
</CounsellorBar>
