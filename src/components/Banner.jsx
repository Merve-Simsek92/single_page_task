import React from 'react'

const Banner = () => {
  return (
    <div className="container-fluid banner">
    <div className="container text-center">
      <h4 className="display-6">The IT Career of Your Dreams Starts Here!</h4>
      <h3 className="display-1">Merve Tech!</h3>
      <a href="#services">
        <button type="button" className="btn btn-danger btn-lg">
          Our services
        </button>
      </a>
    </div>
  </div>
  )
}

export default Banner