<script lang="ts">
    // core components
    import { Col, Row, Progress, CardBody, Card } from 'sveltestrap';


    let employee =
    {
      name: 'Davos Sand',
      progress: 50,
      profile_image: 'https://picsum.photos/id/426/400/600.jpg',
      position: "Junior Counsellor",
      tenure: "6 months",
      training: "63"
    }; 

  </script>
  
  <div class="container">
    <div class="row justify-content-md-center">

        <div class="col">
            <div class="card border-primary mb-3" style="max-width: 23rem;">
                <div class="card-header">Counsellor Information</div>
                <div class="card-body text-primary">
                <h5 class="card-title">{employee.name}</h5>
                    <Card class="col-md-auto">
                        <CardBody>
                                <Row class="row-2 py-2">
                                    <Col class="d-flex align-items-center col-md-auto">
                                    <div>
                                        <div class="row employee-image">
                                        <img
                                            alt={employee.name}
                                            class="rounded-circle"
                                            src={employee.profile_image}
                                        />
                                        </div>
                                    </div>
                                    
                                    </Col>
                                    <Col class="d-flex align-items-center col-md-auto">
                                        <div>
                                            <div class="row employee-role">
                                            {employee.position}
                                            </div>
                                            <div class="row employee-role">
                                                {employee.tenure}
                                            </div>
                                            <div class="row employee-role">
                                                Total training {employee.training} hours
                                            </div>
                                            
                                        </div>
                                        </Col>
                                </Row>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card border-primary mb-3" style="max-width: 25rem;">
                <div class="card-header">Overall Progress</div>
                <div class="card-body text-primary">
                    <Card class="col-md-auto">
                        <CardBody>
                                    <Col class="employee-progress progress-bars align-items-center col-md-auto">
                                        <div class="sepration"><h6>Module Completion</h6></div>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: {employee.progress}%;" aria-valuenow={employee.progress} aria-valuemin="0" aria-valuemax="100">{employee.progress}</div>
                                          </div>
                                          <div class="sepration"><h6>Traget training Time</h6></div>
                                          <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: {employee.training}%;" aria-valuenow={employee.training} aria-valuemin="0" aria-valuemax="100">{employee.training}</div>
                                          </div>
                                    </Col>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

    </div>
      

    <div class="row">

      <div class="col-md-auto">
        Variable width content
      </div>
 
    </div>
  </div>
  




  <style>  
    .rounded-circle {
      /* Crops the image to a circle. */
      object-fit: cover;
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }
    
    .employee-role {
      font-size: 16px;
      color: gray;
    }
    
    .sepration{
        margin: 1em;
    }
  </style>