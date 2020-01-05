import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/article"
//import '../assets/scss/blog-listing.scss'

const IndexPage = () => (
  <Layout>
   	<SEO title="Home" />
    
	{/* Need to loop through "article" component that I will import from a new component I will
	create right now */}

		<div id="blog-listing" className="et_pb_blog_grid">
		    <Article id="123"/>
			<Article id="124"/>
			<Article id="125"/>
		
		{/* <div><img src="http://via.placeholder.com/350"/></div> */}
	</div>
	
  </Layout>
)

export default IndexPage
