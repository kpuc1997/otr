import React from 'react'
import '../scss/custom.scss'
import Carousel from 'react-bootstrap/Carousel'


export default (props) => {
return <Carousel.Item>
    <img
      className="d-block w-100 CPic"
      src={props.image}
      alt=''
    />
</Carousel.Item>
}