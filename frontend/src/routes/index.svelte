<script lang='ts'>
  import {Router, Route} from "svelte-routing"

  import ModulePage from './modules.svelte';
  import LearningOutcomePage from './learning-outcomes.svelte';
  import MessagingPage from './chatbot-simulation.svelte';
</script>


<Router>

  <Route path="/" component="{ModulePage}"/>
  
  <Route path="learning-outcomes" component="{LearningOutcomePage}"/>

  <Route path="chatbot-simuation" component="{MessagingPage}"/>

</Router>