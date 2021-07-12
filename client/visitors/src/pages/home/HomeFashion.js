import React, { Fragment} from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";

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
        headerPaddingClass="header-padding-1"
        headerTop="visible"
      >
     
        <HeroSliderOne />

        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
       
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
