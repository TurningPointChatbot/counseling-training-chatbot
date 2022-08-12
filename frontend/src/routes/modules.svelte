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
  let modules: Array<any> = [];

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

  /**
   * Getting a list of assigned modules for the user signed in.
   * @param user
   */
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
        // all modules assigned
        let assignments = data.chatbot_assignment; 
        for (let i: number = 0; i < assignments.length; i++) {
          // adding relevant info from database to the modules list locally.
          modules.push({
            title: 'Module ' + String(i + 1),
            description: data.chatbot_module[i].description, 
            image: 'https://picsum.photos/id/426/400/600.jpg',
            dateAccessed: '2022-05-25'});
            
          console.log(modules);
        }
      }
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
    return modules;
  }

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
  <ModuleRow listData={modules} rectangleOrCircle={true}/>
  {/await}
</div>
</CounsellorBar>