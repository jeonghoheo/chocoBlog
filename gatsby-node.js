const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/PostsTemplate.jsx`)

  // graphql를 사용해 데이터 가져오기
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              excerpt(pruneLength: 200, truncate: true)
              frontmatter {
                path
                title
                date
              }
              id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // 블로그 포스트 페이지 만들기
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPost,
      context: {},
    })
  })
}
