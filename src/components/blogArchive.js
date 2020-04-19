import React from "react"
import '../scss/custom.scss'
import { StaticQuery, graphql } from 'gatsby'
import BlogArchiveItem from './blogArchiveItem'
import BlogArchiveYear from './blogArchiveYear'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function BlogArchive(data) {

var blogs = data.allMarkdownRemark.edges.map((edge)=>(edge.node));
var archive = [];
var year = new Date();
archive.push(<BlogArchiveYear key='CurrentYear' year={year.getFullYear()} />)
var item;
var itemYear;
for (item of blogs) {
    itemYear = new Date(item.frontmatter.date)
    if (itemYear.getFullYear() < year.getFullYear()) {
        archive.push(<BlogArchiveYear key={item.id} year={itemYear.getFullYear()} />);
        year = itemYear;
    }
    archive.push(<BlogArchiveItem key={'Item' + item.id} data={item} />)
}

return <div>
<div className='col text-center pl-0 pr-0'>
  <h5 className='text-primary'>Previous Blog Posts</h5>
</div>
<Accordion defaultActiveKey={new Date().getFullYear()}>
  <Card>
    {archive}
  </Card>
</Accordion>
</div>
}

const dataQuery = graphql`
query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 50, format: HTML)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default () => (<StaticQuery query={dataQuery} render={BlogArchive} />);