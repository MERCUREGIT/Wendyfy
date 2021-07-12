import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {routes} from "../../config/routes"
import uuid from "uuid/v4";

const BlogPost = ({post, prevPost,nextPost,dontShowCover=false,strings={} }) => {

  return (
    <Fragment>
      <div className="blog-details-top">
        {!dontShowCover && <div className="blog-details-img">
          <img
              style={{minWidth: '100%'}}
              alt=""
              src={`${post.file}`}
          />
        </div>}
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>{new Date(post.date).toLocaleString(strings['lang'])}</li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${post._id}`}>
                {post.comments.length} <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>{post.subTitle}</h3>
          <p dangerouslySetInnerHTML={{__html:post.body}}>

          </p>
          <blockquote>
          {post.bodyQuote}
          </blockquote>
          <p>
            {post.body2}
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  routes.server+ `/${post.file}`
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  routes.server +  `/${post.file2}`
                }
              />
            </div>
          </div>
        </div>
        <p>
        {post.body3}
        </p>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>

           {post.category.map(element =>
            <li  key={uuid()}>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
               {element},
              </Link>
            </li>
           )}


          </ul>
        </div>
        <div className="blog-share">
          <span>{strings['share']} :</span>
          <div className="share-social">
            <ul>
              <li>
                <a className="facebook" href={"https://www.facebook.com/sharer/sharer.php?u="+window.location.href}>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href={"https://twitter.com/intent/tweet?text="+window.location.href}>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="instagram" href={"https://wa.me/?text="+window.location.href}>
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="next-previous-post">
        {prevPost?<Link to={process.env.PUBLIC_URL + `/blog-details-standard/${ prevPost._id}`}>
          {" "}
          <i className="fa fa-angle-left"/> {strings['prev_post']}
        </Link>:<span>&nsbp;</span>}
        {prevPost? <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${ nextPost._id }`}>
          {strings['next_post']} <i className="fa fa-angle-right" />
        </Link>:<span>&nsbp;</span>}
      </div>
    </Fragment>
  );
};

export default BlogPost;
