import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 
import {multilanguage} from "redux-multilanguage";

const HeroSliderOneSingle = ({strings, data, sliderClassName }) => {
  return (
    <div
    style= {{backgroundImage:  "url(/api/"+data.image +")", backgroundSize: "cover"}}
      className={`single-slider slider-height-2 bg-purple ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
      <div  className="container-fluid" style= {{backgroundColor: " rgba(0,0,0,0.5)", height:"100vh", width:"100vw"}}>
        <div className="row justify-content-center " >
          <div  className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div   className="slider-content slider-animated-1">
              <h1 className="animated text-center text-white">{data.title}</h1>
              <h3 className="animated text-center text-white">{data.subtitle}</h3>
              <div className="slider-btn text-center btn-hover">
                <Link
                  className="animated text-white"
                  to={process.env.PUBLIC_URL + data.url}
                >
                 { strings['SHOP_NOW'] }
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

const mapStateToProps = state => {
  return {
    slider: state.slider,
  };
};



export default connect(mapStateToProps)(multilanguage(HeroSliderOneSingle));
