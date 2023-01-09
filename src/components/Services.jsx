import React from 'react'

const Services = () => {
  return (
 
   <div className="container-fluid services pt-5 pb-5"id="services">
      <div className="container text-center">
        <h2 className="display-3" >Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          doloribus.
        </p>
        <div className="row pt-4">
          <div className="col-md-4">
            <span className="circle"><i className="fas fa-code fa-5x"></i></span>
            <h3 className="mt-3">Programming</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              a!
            </p>
          </div>

          <div className="col-md-4">
            <span className="circle"><i className="fas fa-palette fa-5x"></i></span>
            <h3 className="mt-3">Design</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              a!
            </p>
          </div>

          <div className="col-md-4">
            <span className="circle"
              ><i className="fas fa-network-wired fa-5x"></i
            ></span>
            <h3 className="mt-3">Networking</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              a!
            </p>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Services