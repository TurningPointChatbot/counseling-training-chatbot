<script lang="ts">
  import CounsellorBar from '$lib/components/CounsellorBar.svelte';
  import ModuleRow from '../lib/components/ModuleRow.svelte';
  import supabase from '$lib/supabase';
  import userStore from '../stores/authStore';
  import type { Session, User } from '@supabase/supabase-js';

  let session: Session;
  let user: User;
  let modules: Array<any>;

  async function getModulesList(user) {
    modules = [];
    try {
      let { data, error } = await supabase
        .from('user')
        .select(
          ` 
        id,
        email,
        chatbot_assignment(
          cbm_id,
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
        modules = []
        for (let i: number = 0; i < data.chatbot_assignment.length; i++) {
          // adding relevant info from database to the modules list locally.
          modules.push({
            title: data.chatbot_module[i].title,
            description: data.chatbot_module[i].description, 
            cbm_id: data.chatbot_assignment[i].cbm_id,
            completed: data.chatbot_assignment[i].completed,
            image: 'https://picsum.photos/id/426/400/600.jpg',
            dateAccessed: '2022-05-25'});
        }
        console.log(modules);
      }
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
    return modules;
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

  let promise = getModulesList(user);

</script>

<html lang="en" data-theme="cupcake" />
<CounsellorBar>
  <div class="m-3">
    <h1>Modules</h1>
  </div>
  <div class="m-3 h-3/4">
    <!-- Generating the list of modules using the ModuleRow.svelte-->
    {#await promise then modules}
      <ModuleRow listData={modules} rectangleOrCircle={true} />
    {/await}
  </div>
</CounsellorBar>
