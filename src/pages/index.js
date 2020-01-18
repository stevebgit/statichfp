import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/article"

const IndexPage = () => {

	const data = useStaticQuery(graphql`
      query {
			allWordpressPost {
				edges {
				node {
					id
					title
					date(formatString: "MMM DD, YYYY")
					slug
					excerpt
					featured_media {
					localFile {
						absolutePath
						relativePath
						childImageSharp { 
						fluid(maxWidth: 6000) {
							...GatsbyImageSharpFluid
							}
						}
					}
					}
				}
				}
			}
			}`)



	const allPosts = data.allWordpressPost.edges;
		return (
			<Layout>
				<SEO title="Home" />
				<div id="blog-listing" className="et_pb_blog_grid">
                {
					allPosts.map((post) => {
						//console.log(post)
						 return (
							 <Article id={post.node.id} 
								 	  key={post.node.id}	
									  slug={post.node.slug} 
									  title={post.node.title} 
									  excerpt={post.node.excerpt} 
									  date={post.node.date}
								      imageUrl={post.node.featured_media.localFile.childImageSharp.fluid.src} />
						 )
					})
				}

				</div>

			</Layout>
		
		)
		}

	export default IndexPage;