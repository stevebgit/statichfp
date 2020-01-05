import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/article"
import jQuery from 'jquery'
import initCardJS from "../assets/js/article-card"
//import '../assets/scss/blog-listing.scss'


const IndexPage = () => {

	const data = useStaticQuery(graphql`
      query {
			allWordpressPost {
				edges {
				node {
					id
					title
					date
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


//console.log(data);
	initCardJS();
	const allPosts = data.allWordpressPost.edges;

		return (
			<Layout>
				<SEO title="Home" />

				{/* Need to loop through "article" component that I will import from a new component I will
			create right now */}

				
		
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

					{/* <div><img src="http://via.placeholder.com/350"/></div> */}
				</div>

			</Layout>
		
		)
		}

	export default IndexPage;