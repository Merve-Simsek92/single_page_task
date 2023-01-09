import React from 'react'

const Contact = () => {
  return (
    <div>

<div className="container-fluid pt-5 pb-5 contact"id="contact">
      <div className="container">
        <h2 className="display-3 text-center" >Contact us</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro.
        </p>
        <div className="row pb-3">
          <div className="col-md-6">
            <input
              className="form-control form-control-lg mb-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="form-control form-control-lg mb-3"
              type="text"
              placeholder="Email"
            />
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="col-md-6">
            <textarea className="form-control form-control-lg" rows="5"></textarea>
          </div>
        </div>
        <div className="col-md-3 mx-auto text-center">
          <button type="button" className="btn btn-danger btn-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
    <div className="container text-center pt-5 pb-5">
      All Rights Reserved &copy; 2022
    </div>

    </div>
  )
}

export default Contact