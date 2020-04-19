import React from 'react'
import '../scss/custom.scss'
import Pic1 from '../images/Folk Fest.jpg'
import Pic2 from '../images/Kyle Clapper.jpg'
import Pic3 from '../images/IMG_2072.jpg'
import Pic4 from '../images/PCs.jpg'
import Carousel from 'react-bootstrap/Carousel'
import CPic from './cPic'

const CarouselComp = () => (
<Carousel id='carouselExampleIndicators'>
  <Carousel.Item>
    <img
      className="d-block w-100 CPic"
      src={Pic1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 CPic"
      src={Pic2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 CPic"
      src={Pic3}
      alt="Third slide"
    />
  </Carousel.Item>
  {/* <CPic image={Pic3} /> */}
</Carousel>
)

export default CarouselComp