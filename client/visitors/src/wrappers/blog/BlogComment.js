import React, { Fragment } from "react";

const BlogComment = ({comments}) => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-20">
        
        <div className="single-comment-wrapper mt-15">
          <div className="blog-comment-img">
            <img
             style={{width:100, height:100, borderRadius:50}}
              src= { process.env.PUBLIC_URL + "/assets/img/blog/comment-1.jpg"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4> {comments.user}</h4>
            <span>{comments.date} </span>
            <p>
              {comments.body}
            </p>
          </div>
        </div>
      </div>
    
    </Fragment>
  );
};

export default BlogComment;
