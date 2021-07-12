import PropTypes from "prop-types";
import React, {useState, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPosts from "../../wrappers/blog/BlogPosts";

import { connect } from "react-redux";
import {multilanguage} from "redux-multilanguage";

const BlogStandard = ({ location, post,strings }) => {
  const { pathname } = location;

  const [filterList, handleFilterList] = useState([])
  
  const [pagePosition, handlePosition] = useState({
    pageNumer: 0,
    totalNumberOfPages : 0,
    totalPagesCount:[]
  })

  const filteredPost = (val)=>{
    console.log(val)
    handleFilterList(val);
  }

const searchElement = (val)=>{
  console.log(val);
  let searchResult = post.filter(element=> element.title.split(' ').includes(val) || element.body.split(' ').includes(val) || element.category.includes(val));
 
  handleFilterList(searchResult);
}
// complete the pagination functionaity
const paginationManager= (position)=>{
  if(position && pagePosition.totalPagesCount.includes(position)){
    handlePosition({
      ...pagePosition,
      pageNumer:position
    });
  }
  
}

  return (
    <Fragment>
      <MetaTags>
        <title>Wendy Fy | Blog</title>
        <meta
          name="description"
          content="Blog of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings['home']}</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {strings['blog']}
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="ml-20">
                  <div className="row">
                    {/* blog posts */}
                   {
                   
                   filterList.length === 0 ? post.map(element=> <BlogPosts key={element._id} post ={ element }/> ) :  filterList.map(element=> <BlogPosts key={element._id} post ={ element }/> )
                  }
                  </div>

                  {/* blog pagination */}
                  {paginationManager() ? <BlogPagination count={pagePosition.totalPagesCount}  position/> :""}
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <BlogSidebar post={post} searchElement={searchElement} filterePost={filteredPost} />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

BlogStandard.propTypes = {
  location: PropTypes.object,
  strings:PropTypes.object,
};

function mapStateToProps (state){
  return {
      post:state.blog
    }
}


export default connect(mapStateToProps, null)(multilanguage(BlogStandard));
