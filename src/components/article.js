import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Article = ({ entryUrl }) => (
	<article id="post-4059" 
			className="et_pb_post clearfix et_pb_has_overlay  format-standard has-post-thumbnail hentry  article-card" 
			style={{paddingBottom: "110px"}}
			>
		<div className="et_pb_image_container">	
			<a href="https://highfrequencyperspectives.com/index.php/2018/08/29/happy-first/" className="entry-featured-image-url">
				<img src="https://highfrequencyperspectives.com/wp-content/uploads/2018/08/men-2425121_1280-400x250.jpg" width="400" height="250"/>
					<span className="et_overlay"></span>
			</a>
		</div>
		<div className="post-content">
		</div>
		<div className="article-card__content">
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
			<p>It becomes kind of a snowball – if you maintain that high vibe, you get ideas that relate to your un-manifested objectives ( if you’re chronically low on the emotional scale, you’re not listening to that part of that you has the impulses and ideas you need – that’s just all there is to it ).</p>
			</div>
			<div className="article-card__meta"></div>
		</div>
		<div className="article-card__date">
			<span className="article-card__day">29</span>
			<span className="article-card__month">Aug</span>
		</div>
	</article>
)

// Article.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Article.defaultProps = {
//   siteTitle: ``,
// }

export default Article
