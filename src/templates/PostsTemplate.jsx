import React from "react"
import { graphql } from "gatsby"

const PostsTemplate = props => {
  const {
    data: {
      markdownRemark: { frontmatter },
    },
  } = props
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        path
        title
      }
    }
  }
`

export default PostsTemplate
