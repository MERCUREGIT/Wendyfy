import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";
import BlogCommentForm from './BlogComment'
import { connect } from "react-redux";
import uuid from "uuid/v4";
import {Link} from "react-router-dom";
import {multilanguage} from "redux-multilanguage";

const BlogDetailsStandard = ({ allowComments,location, match, post, previous,next,strings}) => {
  // console.log('Params passed',match.params.id)

  // let post = data.filter((element)=> match.params.id === element._id)[0];
  const { pathname } = location;


  return (
    <Fragment>
      <MetaTags>
        <title>WendyFy | Blog Post</title>
        <meta
          name="description"
          content="Blog post page of WendyFy react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
          {strings['blog_post']}
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
          <div style={{backgroundSize: 'cover',backgroundPosition:'center',height:400,width:"100%",backgroundImage:`url('${post.file}')`}}/>
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-12">
               <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
                  <BlogPost strings={strings} post={post} key={uuid()} nextPost ={next} prevPost={previous} dontShowCover={true}/>

                  { allowComments === "true" ? <div className="row">
                    <div className="col-md-6 mt-50">
                      {post.comments.slice(0,6).map( element=> <BlogComment key={element._id} comments ={element} />)}
                      {/* blog post comment */}
                    </div>
                    <div className="col-md-6">
                       <BlogCommentForm blopPostId={post._id}/>
                    </div>
                  </div>:""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

BlogDetailsStandard.propTypes = {
  location: PropTypes.object,
    strings:PropTypes.object
};
var postIndex ;
function mapStateToProps(state, ownProps) {

  const blogPost = state.blog.filter((element)=> ownProps.match.params.id === element._id)[0]
  postIndex =state.blog.indexOf(blogPost);

  return{
    allowComments: state.blog[postIndex].allowComments,
    post:  state.blog[postIndex],
    next:  state.blog[postIndex + 1] ? state.blog[postIndex + 1] : state.blog[postIndex],
    previous:state.blog[Math.abs(postIndex - 1)]   ,
  }
}


export default connect(mapStateToProps,null)(multilanguage(BlogDetailsStandard));

