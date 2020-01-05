import React from "react"
import '../assets/scss/card.scss'
import '../assets/scss/blog-listing.scss'


/*
   node:
   title: "Happy First &#8211; The Right Sequence and the Significance of One&#8217;s Unconditional Primary Mood"
   date: "2018-08-29T23:34:05.000Z"
   slug: "happy-first"
   excerpt: "<p>It becomes kind of a snowball &#8211; if you maintain that high vibe, you get ideas that relate to your un-manifested objectives ( if you&#8217;re chronically low on the emotional scale, you&#8217;re not listening to that part of that you has the impulses and ideas you need &#8211; that&#8217;s just all there is to it ).</p>↵"
   featured_media: {localFile: {…}}

*/

const Article = ({ id }) => (
	<article id={id} 
			
			className="et_pb_post clearfix et_pb_has_overlay post-4059 post type-post status-publish format-standard has-post-thumbnail hentry category-abraham-hicks category-loa category-neville article-card"
			
			>
		<div className="et_pb_image_container">	
			<a href="https://highfrequencyperspectives.com/index.php/2018/08/29/happy-first/" className="entry-featured-image-url">
				<img alt="" src="https://highfrequencyperspectives.com/wp-content/uploads/2018/08/men-2425121_1280-400x250.jpg" width="400" height="250"/>
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

		{/* <div className="article-card__content">
			<h2 className="entry-title article-card__title">
				<a href="https://highfrequencyperspectives.com/index.php/2018/08/29/happy-first/">Happy First – The Right Sequence and the Significance of One’s Unconditional Primary Mood</a>
			</h2>
			<div className="article-card__excerpt" 
				style={{
					display: "none", 
					height: "252px",
					opacity: "1"
					}}
				>
				<p className="post-meta">It becomes kind of a snowball – if you maintain that high vibe, you get ideas that relate to your un-manifested objectives ( if you’re chronically low on the emotional scale, you’re not listening to that part of that you has the impulses and ideas you need – that’s just all there is to it ).</p>
			</div>
			<div className="article-card__meta"></div>
		</div>
		<div className="article-card__date">
			<span className="article-card__day">29</span>
			<span className="article-card__month">Aug</span>
		</div> */}
	</article>
)

// Article.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Article.defaultProps = {
//   siteTitle: ``,
// }

export default Article
