import PropTypes from "prop-types";
import React from "react";
import SectionTitle from "../../components/section-title/SectionTitle";
import MeasurementForm from "../../pages/home/MeasurementForm";
import { multilanguage } from "redux-multilanguage";


const BlogFeatured = ({ strings,spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container w-100">
     
        <SectionTitle
          titleText= {strings["your_measures"]} 
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <MeasurementForm strings={strings}/>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default multilanguage(BlogFeatured);
