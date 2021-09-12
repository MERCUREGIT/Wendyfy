import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import {multilanguage} from "redux-multilanguage/index";


const RecentBlogPostWrapper= ({post, strings})=>{
    let sortedPostList = [...post].sort((a, b)=>new Date(b.date) - new Date(a.date));
    return <div className="container">
        <hr/>
        <h1 className="text-center">News & Actualités</h1>
        <hr/>
        <div className="row justify-content-center">
        {  sortedPostList.slice(0,3).map(post=>{
        return <div key={post._id} className="col-6 col-lg-3 col-md-4 col-sm-6">
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
                    <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${post._id}`}>{post.title.substring(0,15)} {post.title.length<17?"":"..."} </Link>
                </h4>
                <p>{post.description.substring(0,90)}... <Link to={process.env.PUBLIC_URL + `/blog-details-standard/${post._id}`}>
                        {strings['read_more']}
                        </Link></p>
                <div className="blog-share-comment">
                    <div className="blog-share">
                        {/* <span>{strings['share']} :</span> */}
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
        </div>})}
        <div className=" col-12 col-lg-3 col-md-10 col-sm-6 p-5">
            <div className="jumbotron justify-content-center">
                <h1 className="display-6">Wendy Fy</h1>
                <p className="lead">suivez l'actualité de Wendy Fy en direct</p>
                <hr className="my-4" />
                <p>votre marque de vêtements de choix, nous vous mettons à jour avec la mode vestimentaire. </p>
                <h3>No Fiction</h3>
                <Link className="btn text-white btn-warning" to={process.env.PUBLIC_URL + `/blog-standard`}>
                        {strings['read_more']}
                </Link>
            </div>
        </div>
        </div>
    </div>
}
  
  function mapStateToProps (state){
    return {
        post:state.blog
      }
  }
  
  
  export default connect(mapStateToProps, null)(multilanguage(RecentBlogPostWrapper));
