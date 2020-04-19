import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PostLink from "./postLink"

export default () => {

    return <StaticQuery
        query={
            graphql`
              query {
                allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 10) {
                  edges {
                    node {
                      id
                      excerpt(pruneLength: 250)
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
        }
        render={(data) => {
            const Posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
            .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
          return <div id="BlogTicker" className="list-group overflow-auto" >
          {Posts}
          </div>
        }    
        }

    />
      }
