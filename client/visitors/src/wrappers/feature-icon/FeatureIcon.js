import PropTypes from "prop-types";
import React from "react";
import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle";
import { multilanguage } from "redux-multilanguage";
const FeatureIcon = ({strings, spaceTopClass, spaceBottomClass }) => {
 

  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {strings["fun_fact"].map(singleFeature => {
            return (
              <FeatureIconSingle
                singleFeature={singleFeature}
                key={singleFeature.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default multilanguage(FeatureIcon);
