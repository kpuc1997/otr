import React from "react"
import '../scss/custom.scss'
import { Link } from 'gatsby'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


export default (props) => {
        var year = new Date(props.data.frontmatter.date)
        year = year.getFullYear()
    return <Link className="text-decoration-none" to={props.data.frontmatter.path} >
        <Accordion.Collapse eventKey={year}>
            <Card.Body className='pb-0 pt-1'>{props.data.frontmatter.title}<br />
             <small className='text-muted'>{props.data.frontmatter.date}</small>
             <hr className="mb-0 mt-1"/></Card.Body>
        </Accordion.Collapse>
    </Link>}