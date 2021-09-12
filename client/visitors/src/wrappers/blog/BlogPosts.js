import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
// import {routes} from "../../config/routes"
import {multilanguage} from "redux-multilanguage/index";
const BlogPosts = ({ post,strings }) => {
  return (
    <Fragment>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${post._id}`}>
              <div style={{backgroundSize: 'cover',backgroundPosition:'center',height:200,width:"100%",backgroundImage:`url('${post.file}')`}}/>
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>{ moment(post.date).format('MMMM d, YYYY') }</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${post._id}`}>
                    {post.comments.length} <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${post._id}`}>
              {post.title}
              </Link>
            </h4>
            <p>
            {post.description}
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${post._id}`}>
                  {strings['read_more']}
                </Link>
              </div>
              <div className="blog-share">
                <span>{strings['share']} :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="https://www.facebook.com/wendybyfy">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="https://www.instagram.com/wendyfy_237/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 </Fragment>
  );
};

export default multilanguage(BlogPosts);


/*

Json pour les blog post


[
  {
    id:xxx,
    feartureImage:xxx,
    imageAlt:xxx,
    postDate:xxx,
    shortTitle:xxx,
    longTitle:xxx,
    categories:["xxx","wxxw","cxcxc"]
    description:xxx,
    social:{
      facebook:xxx,
      twitter:xxx,
      instagram
    },
    comments:[
      {
        profileImage:"image",
        name:xxx,
        date:xxx,
        reply:[
          {
            // lien au commentaire
          }
        ]
      }
    ]




  }
]
*/
