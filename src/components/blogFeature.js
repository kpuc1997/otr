import React from "react"
import '../scss/custom.scss'
import { Link } from 'gatsby'

function BlogFeature(props) {
    var node = props.data.allMarkdownRemark.edges[0].node

    return <div className="card">
        <div className="card-body">
            <Link className="text-decoration-none" to={node.frontmatter.path}>
                <h4 className="card-title text-primary ml-1">{node.frontmatter.title}</h4>
            </Link>
            <h6 className="card-subtitle mb-2 ml-2 text-muted">{node.frontmatter.date}</h6>
            <div className="card-text m-2" dangerouslySetInnerHTML={{ __html: props.data.allMarkdownRemark.edges[0].node.excerpt }}/>
            <div className='col text-center'>
                <Link to={node.frontmatter.path} >
                    <button type='button' className='btn btn-primary justify-center'>
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    </div>
}

export default BlogFeature;