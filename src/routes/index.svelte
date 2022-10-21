<script lang="ts">
  import LoginPage from './login.svelte';
</script>

<script context="module" lang="ts">
  export async function load({ fetch, session }) {
    // We need to use cookies cvause this don't work
        const user = session.user;
        if (!user) {
          // console.log("No user logged in: redirecting to Login Page");
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
