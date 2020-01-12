import React, { Component } from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/article"
import jQuery from 'jquery'
//import initCardJS from "../assets/js/article-card"
//import '../assets/scss/blog-listing.scss'

const IndexPage = () => (

	<StaticQuery
		query={graphql`
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
				}`
			}

		render={data => (
			
				<Layout>
					<SEO title="Home" />
					<div id="blog-listing" className="et_pb_blog_grid">

						{
							data.allWordpressPost.edges.map((post) => {
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
		)}
		/>
	)
	export default IndexPage;