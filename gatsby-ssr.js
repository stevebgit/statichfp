/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it


const React = require("react")
exports.onRenderBody = ({
	setHeadComponents,
	setPreBodyComponents,
	setPostBodyComponents,
}) => {
	setHeadComponents([
		<script
			key="1"
			type="text/javascript"
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js?ver=1.12.4-wp"
			//src="/jquery.js?ver=1.12.4-wp"
		/>,
	])
	setHeadComponents([
		<script
			key="2"
			type="text/javascript"
			//src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"
			src="/jquery-migrate.js?ver=1.4.1"
		/>,
	])
	
	setPreBodyComponents([
		<script
			key="3"
			type="text/javascript"
			src="/article-card1.js"
			//src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"
		/>,
	])

	// setPostBodyComponents([
	// 	<script
	// 		key="4"
	// 		type="text/javascript"
	// 		src="/article-card.js"
	// 	/>,
	// ])
}