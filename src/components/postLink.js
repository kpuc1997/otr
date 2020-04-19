import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
    <Link className="list-group-item list-group-item-action pb-0" to={post.frontmatter.path}>
      <h6 className="text-primary" >{post.frontmatter.title} ({post.frontmatter.date})</h6>
      <p className="text-muted small"  >{post.excerpt}</p>
      {/* style={{lineHeight: '1.2'}} */}
    </Link>
)
export default PostLink