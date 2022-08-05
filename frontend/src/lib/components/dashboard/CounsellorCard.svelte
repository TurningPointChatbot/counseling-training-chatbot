<script lang="ts">
  export let employeeData: any;

  let employee = employeeData;
</script>

<div class="card employee-card bg-base-100 shadow-xl">
  <div>
    <h2>
      Counsellor Information
    </h2>
    <hr />

    <div class=" employee-description card-body grid grid-cols-2 h-full w-full">
      <div>
        <img
          alt={employee.name}
          class="rounded-rectangle"
          src={employee.profile_image}
        />
      </div>

      <div class="card p-3">
        <h5>{employee.name}</h5>
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

