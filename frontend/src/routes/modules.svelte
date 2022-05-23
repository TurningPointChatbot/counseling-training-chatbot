<script lang="ts">
  import CounsellorBar from '$lib/components/CounsellorBar.svelte';
  import ModuleRow from '../lib/components/ModuleRow.svelte';
  import supabase from '$lib/supabase';
  import userStore from '../stores/authStore';
  import type { Session, User } from '@supabase/supabase-js';

  interface Module {
    moduleName: string;
    dueDate: string;
    progress: number;
    description: string;
  }
  let session: Session;
  let user: User;
  let userModules: Array<Module> = [];

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
          userModules.push({
            moduleName: 'Module ' + String(i + 1),
            dueDate: assignments[i].duedate,
            progress: (i + 1 + 2) * 10,
            description: data.chatbot_module[i].description
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
