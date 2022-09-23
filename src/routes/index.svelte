<!-- <script lang="ts">
  import LoginPage from './login.svelte';
</script>

<LoginPage /> --> 
<script context="module" lang="ts">
import supabase from "$lib/supabase";

  export async function load({ fetch, params }) {
        // const { user } = session; // since we are using supabase we might be using htat instead.. but will test this out and see what happens 
        const user = await supabase.auth.user();
        if (!user) {
          console.log("since user ain't logged in... I should redirect you");
          //location.href = '/login';
            return {
                status: 302,
                redirect: "/login"
            };
        }
        else{ // redirect to dashboard
          console.log("user is logged in ... apparently");
        }
        return {};
  }
  
</script>
