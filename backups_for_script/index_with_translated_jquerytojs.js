import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/article"
//import jQuery from 'jquery'
//import initCardJS from "../assets/js/article-card"
//import '../assets/scss/blog-listing.scss'
import anime from 'animejs/lib/anime.es.js';


const IndexPage = () => {

	// useEffect(() => {
	// 	let etblog = document.querySelector(".et_pb_blog_grid");
		
	// 	 if (etblog) {
	// 		let posts = etblog.querySelectorAll('.et_pb_post');
	// 		 	for (let post of posts ) {
					
	// 				post.classList.add('article-card');
					
	// 				//post.append('div');
					
	// 				let articleCardDiv = document.createElement('div');
	// 				articleCardDiv.className = "article-card__content";
	// 				//debugger;
	// 				post.append(articleCardDiv);

	// 				let postContent = post.querySelector('.article-card__content');
	// 				console.log(postContent);
			
	// 				let excerpt1 = post.cloneNode(true);
	// 				excerpt1.querySelector('.et_pb_image_container').remove();
	// 				excerpt1.querySelector('.post-content').remove();
	// 				excerpt1.querySelector('p').remove();
	// 				excerpt1.querySelector('h2').remove();

	// 				let allParagraphs = post.querySelectorAll('p:not(.post-meta)');
					
	// 				let excerptWrap = document.createElement("div")
	// 				excerptWrap.className = "article-card__excerpt";

	// 				let textExcerpt;
					
	// 				if ( allParagraphs.length > 0 ) {
	// 					textExcerpt = allParagraphs[0].textContent;
	// 					console.log(textExcerpt);
	// 					allParagraphs.forEach(e => e.parentNode.removeChild(e))
	// 					//allParagraphs.removeChild(textExcerpt);
	// 				}

	// 				/**
	// 					 * Appends excerpt to content div
	// 				*/
	// 				excerptWrap.textContent = textExcerpt;
	// 				postContent.append(excerptWrap);
					  
	// 					/**
	// 					 * Creates meta div and appends to content
	// 					 */
	// 				let articleMeta = document.createElement("div");
	// 				articleMeta.className = "article-card__meta";
	// 				postContent.append(articleMeta);

	// 					/**
	// 					 * Creates date div based off .published
	// 					 */
	// 				let postPublished = post.querySelector('.published');

	// 				  let str;

	// 				if ( postPublished ) {
	// 					let slicedContent = postPublished.textContent;
	// 					slicedContent = slicedContent.slice(0, -6);
	// 					postPublished.textContent =  slicedContent;
	// 					post.append(postPublished);
	// 					//postPublished.append(post);
	// 					str = postPublished.textContent;
	// 				// } else {
	// 				// 	str = "Jan 31";
	// 				// }
					
					
	// 				let newDateDiv = document.createElement('div');
	// 				newDateDiv.className = "article-card__date";
	// 				let dateArray = str.split(" ");
	// 				let newDateSpanDay = document.createElement('span');
	// 				newDateSpanDay.className = "article-card__day";
	// 				newDateSpanDay.textContent = dateArray[0];
	// 				let newDateSpanMo = document.createElement('span');
	// 				newDateSpanMo.className = "article-card__month";
	// 				newDateSpanMo.textContent = dateArray[1];

	// 				newDateDiv.append(newDateSpanDay);
	// 				newDateDiv.append(newDateSpanMo);
					  

	// 				postPublished.replaceWith(newDateDiv);

	// 				}

	// 				/**
	// 			   	* Add article-card__title class to title
	// 			   */
	// 				let entryTitle = post.querySelector('.entry-title');
	// 				entryTitle.classList.add('article-card__title');
	// 				post.append(entryTitle);

	// 				  /**
	// 			   * If .post-content exist, then append contents to excerpt
	// 			   */
	// 				let postContents = post.querySelector('.post-content');
	// 				if ( postContents.length ) {
	// 					let postContents_p = post.querySelector('.post-content p');
	// 					let artcardExcerpt = post.querySelector('.article-card__excerpt');
	// 					postContents_p.append(artcardExcerpt);
	// 				}
	// 				  let windowWidth = window.innerWidth;
	// 				  if (windowWidth > 768 ) {
	// 					  let ace = post.querySelector('.article-card__excerpt');
	// 					   if ( ace ) {
	// 							   //ace.style.display = "none";
	// 							   ace.style.height = "0"
	// 					   }
					
	// 				}
	// 				function postModuleSize() {
	// 					let postContentHeight = postContent.offsetHeight;
	// 					post.style.paddingBottom = postContentHeight;
	// 				  }
					
	// 				setTimeout(postModuleSize, 100);

	// 				window.onresize = postModuleSize;

	// 				/**
	// 			   	* Handle animations on desktop
	// 			   */
	// 				if (windowWidth > 768) {
	// 				//	setTimeout(function () {

	// 							let ace = post.querySelector('.article-card__excerpt');
	// 							let et = post.querySelector('.entry-title');

	// 							var animationOpen;
	// 							var animationClose;

	// 							if ( animationOpen ) {
	// 								animationOpen.pause();
	// 							}
	// 							if (animationClose) {
	// 								animationClose.pause();
	// 							}

	// 							et.addEventListener("mouseover", function (event) {
	// 								//alert("hey")
	// 								// highlight the mouseover target
	// 								animationOpen = anime({
	// 									targets: ace,
	// 									opacity: 1,
	// 									height: "168px",
	// 									duration: 200
	// 								});
	// 								animationOpen.play();
	// 							}, false);
								
								

	// 							et.addEventListener("mouseout", function (event) {
	// 								//alert("hey")
	// 								// highlight the mouseover target
	// 								animationClose = anime({
	// 									targets: ace,
	// 									opacity: 0,
	// 									height: "0px",
	// 									duration: 300
	// 								});
									
	// 								animationClose.play();

	// 							}, false);
								
	// 						//}, false); 
								 
	// 					//}, 1000);
	// 				}
	// 			}
	// 		 }
	// 	 })
	

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
	//initCardJS();
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

				</div>

			</Layout>
		
		)
		}

	export default IndexPage;