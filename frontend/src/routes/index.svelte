<script lang='ts'>
  import {Router, Route} from "svelte-routing"

  import ModulePage from './modules.svelte';
  import LearningOutcomePage from './learning-outcomes.svelte';
  import MessagingPage from './chatbot-simulation.svelte';
</script>


<Router>

  <Route path="/" component="{ModulePage}"/>
  
  <Route path="learning-outcomes/:name" let:params>
    <LearningOutcomePage moduleName="{params.name}"> </LearningOutcomePage>
  </Route>
  
  <Route path="chatbot-simulation/:name" let:params>
    <MessagingPage moduleName="{params.name}"></MessagingPage>
  </Route>

</Router>