<script lang="ts">
  export let employeeData: any;

  let employee = employeeData;
</script>

<div class="card employee-card bg-base-100 shadow-xl">
  <div>
    <!-- Counsellor Information Title Section -->
    <h2 class="h2-counsellor-dashboard">
      Counsellor Information
    </h2>
    <hr/>

    <!-- Employee Image Section-->
    <div class="employee-description card-body grid grid-cols-2 h-full w-full">
      <div>
        <img
          alt={employee.name}
          class="rounded-box overflow-hidden"
          src={employee.profile_image}
        />
      </div>

      <!-- Employee Info Section -->
      <div class="card p-3">
        <h3 class="font-bold self-start">{employee.name}</h3>
        <div class="flex items-center">
          <div>
            <div class="p-1 row employee-role">
              Position: {employee.position}
            </div>

            <div class="p-1 row employee-training">
              Total training {employee.training} hours
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

