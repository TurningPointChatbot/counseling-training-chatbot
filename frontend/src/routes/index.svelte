<script lang='ts'>
  import {Router, Route} from "svelte-routing"

  import ModulePage from './ModulePage.svelte';
  import LearningOutcomePage from './LearningOutcomePage.svelte';
  import MessagingPage from './MessagingPage.svelte';
</script>


<Router>

  <Route path="/" component="{ModulePage}"/>
  
  <Route path="learning-outcomes" component="{LearningOutcomePage}"/>

  <Route path="chatbot-simuation" component="{MessagingPage}"/>

</Router>