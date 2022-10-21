<script lang="ts">
  import LoginPage from './login.svelte';
</script>

<script context="module" lang="ts">
  export async function load({ fetch, session }) {
        const user = session.user;
        if (!user) {
            return {
                status: 302,
                redirect: "/login"
            };
        }
        else{
          // console.log("User logged in: redirecting");
          return {
                status: 302,
                redirect: "/profile/account" 
            };
        }
  }
</script>

<LoginPage />
