<script lang="ts">
  import ModuleCardIcon from './ModuleCardIcon.svelte';
</script>

<div class="card bg-base-100 shadow-xl">
  <!-- Assigned Modules Title -->
  <div>
    <h2 class="h2-counsellor-dashboard">
      Assigned Modules
    </h2>
  </div>
  <hr />
  <div class="card-body grid grid-row gap-3 w-full">
    <!-- Module Example 1: Withdrawal -->
    <div class="row"><ModuleCardIcon moduleName="Module 104: Withdrawal" imgUrl="https://images.unsplash.com/photo-1516027828283-84217f09f3c4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225"/></div>
    <!-- Module Example 2: Counselling Techniques -->
    <div class="row"><ModuleCardIcon moduleName="Module 105: Counselling techniques" imgUrl="https://images.unsplash.com/photo-1604882356818-9100fce260a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225"/></div>
  </div>
</div>
