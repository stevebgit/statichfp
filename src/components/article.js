import React from "react"
import '../assets/scss/card.scss'
import '../assets/scss/blog-listing.scss'

const Article = props  => (
	<article id={props.id} 
			className="et_pb_post clearfix et_pb_has_overlay post-4059 post type-post status-publish format-standard has-post-thumbnail hentry category-abraham-hicks category-loa category-neville"
	>
		<div className="et_pb_image_container">	
			<a href={props.slug} className="entry-featured-image-url">
				<img alt="" src={props.imageUrl} width="400" height="250"/>
					<span className="et_overlay"></span>
			</a>
		</div>
		<h2 className="entry-title">
			<a href="https://highfrequencyperspectives.com/index.php/2018/08/29/happy-first/">Happy First – The Right Sequence and the Significance of One’s Unconditional Primary Mood</a>
		</h2>
		<p className="post-meta">
			<span className="published">Aug 29, 2018</span>
		</p>
		<div className="post-content">
			<p>It becomes kind of a snowball – if you maintain that high vibe, you get ideas that relate to your un-manifested objectives ( if you’re chronically low on the emotional scale, you’re not listening to that part of that you has the impulses and ideas you need – that’s just all there is to it ).
			</p>
		</div>
	</article>
)

export default Article