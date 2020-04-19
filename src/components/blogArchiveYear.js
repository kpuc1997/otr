import React from "react"
import '../scss/custom.scss'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function BlogArchiveYear(props){
    var year = props.year
    return <Card.Header className='pt-1 pb-1 pl-2'>
        <Accordion.Toggle as={Button} variant="link" eventKey={year} className="text-decoration-none">
        {props.year}
      </Accordion.Toggle>
    </Card.Header>
}

export default BlogArchiveYear;