<script lang="ts">

    
    export let employeeData: any;

    let employee = employeeData;

  </script>
  
    <div class="card employee-card bg-base-100 shadow-xl">
        <div>
            <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">
            Counsellor Information
            </h2>
            <hr class="bg-base-400" />
            
            <div class=" employee-description card-body grid grid-cols-2 h-full w-full text-primary">
                <div>
                    <img
                    alt={employee.name}
                    class="rounded-rectangle"
                    src={employee.profile_image}/>
                </div>
                
                <div class="card p-3">
                    <h5 class="card-title">{employee.name}</h5>
                        <div class="  flex items-center">
                            <div>
                                <div class="row employee-role">
                                    Position: {employee.position}
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
    height: 150px;
    width: 200px;
  }
    .card-title {
      font-size: 24px;
      width: 100%;
    }
  
    .employee-role {
      font-size: 16px;
      color: gray;
    }

    .employee-card{
        max-height: 100%;
    }
  
  </style>