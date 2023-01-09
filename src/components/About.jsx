import React from 'react'
import aboutus from "../img/aboutus.jpeg"

const About = () => {
  return (
    <div className="container-fluid pt-5 pb-5 about" id="aboutus">
      <div className="container">
        <h2 className="display-3 text-center">About us</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ex!
        </p>
        <div className="clearfix pt-5">
          <img
            src={aboutus}
            className="col-md-6 float-md-end mb-3 product-img"
            width="300"
            height="300"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            veritatis at voluptate commodi officiis sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            veritatis at voluptate commodi officiis sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            veritatis at voluptate commodi officiis sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos laboriosam excepturi exercitationem qui expedita, ex
            temporibus natus necessitatibus accusamus voluptatibus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About