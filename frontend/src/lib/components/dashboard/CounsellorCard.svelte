<script lang="ts">
  export let employeeData: any;

  let employee = employeeData;
</script>

<div class="card bg-base-100 shadow-xl">
  <div>
    <!-- Counsellor Information Title Section -->
    <h2 class="h2-counsellor-dashboard">Counsellor Information</h2>
    <hr />

    <!-- Employee Image Section-->
    <div class="card-body grid grid-cols-2 h-full w-full">
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
            <p class="p-1">
              Position: {employee.position}
            </p>
            <p class="p-1">
              Total training {employee.training} hours
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
