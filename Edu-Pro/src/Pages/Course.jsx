import React from 'react'

import Carousel from 'react-bootstrap/Carousel';


  

  function Course() {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Blogs/mern-stack/og-image.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>MEA(R)N STACK DEVELOPMENT</h5>
          <p>MOST DEMANDING </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upscalenagpur.co.in/wp-content/uploads/2023/10/Data-Science-Training@2x.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>DATA SCIENCE</h5>
          <p>BUILDING THE FUTURE DATA SCIENTISTS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/-t2yTLg0fGA/maxresdefault.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Cybersecurity</h5>
          <p>
          SECURING THE CYBER SPACE.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Course;




