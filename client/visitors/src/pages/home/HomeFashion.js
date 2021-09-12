import React, { Fragment} from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import RecentBlogPostWrapper from "../../wrappers/blog/RecentBlogPostWrapper";
// import TopRatedProductsWrapper from "../../wrappers/product/TopRatedProductsWrapper";

const HomeFashion = () => {

  return (
    <Fragment>
      <MetaTags> 
        <title>Wendy Fy Home </title>
        <meta
          name="description"
          content="Fashion home of Wend Fy react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        
        <HeroSliderOne />
        {/* display top rated products */}
        {/* <TopRatedProductsWrapper spaceBottomClass="pb-60"/> */}
        {/* add the categories for men and women */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
        <RecentBlogPostWrapper />
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
