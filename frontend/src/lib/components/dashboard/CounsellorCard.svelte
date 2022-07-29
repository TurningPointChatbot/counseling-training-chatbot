<script lang="ts">

    
    export let employeeData: any;
    export let totalHoursDone: Number = 10;

    let employee = employeeData;

  </script>
  
    <div class="card employee-card bg-base-100 shadow-xl">
        <div>
            <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">
            Counsellor Information
            </h2>
            <hr class="bg-base-400" />
            
            <div class="employee-description card-body grid grid-cols-2 h-full w-full text-primary">
                <div>
                    <img
                    alt={employee.name}
                    class="rounded-circle"
                    src={employee.profile_image}/>
                </div>
                <div class="card p-3">
                      <div class="flex items-center">
                          <div>
                            <br>
                              <div class="row employee-role">
                                  Position: {employee.position}
                              </div>

                              <div class="row employee-training">
                                  Total training {totalHoursDone} hours
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </div>

    


  
  <style>

  .rounded-circle {
    /* Crops the image to a circle. */
    object-fit: cover;
    border-radius: 50%;
    height: 250px;
    width: 250px;
  }
    .card-title {
      font-size: 24px;
      width: 100%;
    }
  
    .employee-role {
      font-size: 20px;
      vertical-align: middle;
      color: rgb(0, 0, 0);
    }

    .employee-training {
      font-size: 20px;
      vertical-align: middle;
      color: rgb(0, 0, 0);
    }

    .employee-card{
        max-height: 100%;
    }
  
  </style>