/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// gatsby-node.js

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({
	actions,
}) => {
	const { setWebpackConfig } = actions;
	setWebpackConfig({
		externals: {
			jquery: 'jQuery', // important: 'Q' capitalized
		}
	})
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")

	const result = await graphql(`
    {
		allWordpressPost {
			edges {
				node {
					featured_media {
						localFile {
							childImageSharp {
								id
							}
						}
					}
				}
			}
		}
  `)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const BlogPosts = result.data.allWordpressPost.edges
	BlogPosts.forEach(post => {
		createPage({
			path: `/post/${post.node.slug}`,
			component: BlogPostTemplate,
			context: {
				id: post.node.wordpress_id,
			},
		})
	})
}