<script lang="ts">

    
    export let employeeData: any;

    let employee = employeeData;

  </script>

  <div class="card card-side bg-base-100 shadow-xl">
    <figure><img
        alt={employee.name}
        class="rounded-rectangle"
        src={employee.profile_image}
      /></figure>
    <div class="employee-card card-body text-primary">
        <h5 class="card-title">{employee.name}</h5>
        <div class="card p-3">
            <div class="flex flew-row">
              <div class=" employee-description flex items-center basis-3/4">
                <div>
                    <div class="row employee-role">
                        Position: {employee.position}
                    </div>

                    <div class="row employee-tenure">
                        Tenure: {employee.tenure}
                    </div>

                    <div class="row employee-training">
                        Total training {employee.training} hours
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
  
  <style>
      
    .rounded-rectangle {
      /* Crops the image to a rectangle with rounded corners. */
      object-fit: cover;
      border-radius: 25px;
    }
    .card-title {
      font-size: 24px;
    }
  
    .employee-role {
      font-size: 16px;
      color: gray;
    }
    .employee-description{
        padding-left: 10px;
    }
    .employee-card{
        width: 580px;
    }
  
  </style>