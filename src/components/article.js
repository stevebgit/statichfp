import React from "react"
import '../assets/scss/card.scss'
import '../assets/scss/blog-listing.scss'
import { Link } from "gatsby"

const Article = props  => (
	<article id={props.id} 
			className="et_pb_post clearfix et_pb_has_overlay post-4059 post type-post status-publish format-standard has-post-thumbnail hentry category-abraham-hicks category-loa category-neville"
	>
		<div className="et_pb_image_container">	
			<a href={`/post/${props.slug}`} className="entry-featured-image-url">
				<img alt="" src={props.imageUrl} width="400" height="250"/>
					<span className="et_overlay"></span>
			</a>
		</div>
		<h2 className="entry-title">
			<Link
				to={`/post/${props.slug}`}
			><span dangerouslySetInnerHTML={{ __html: props.title }} /></Link>
			
		</h2>
		<p className="post-meta">
			
			<span className="published" > { props.date } </span>
		</p>
		<div className="post-content">
			<p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
		</div>
	</article>
)

export default Article