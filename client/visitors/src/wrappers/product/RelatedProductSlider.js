import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";
import {multilanguage} from "redux-multilanguage";

const RelatedProductSlider = ({ spaceBottomClass, category,strings }) => {
  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 5
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 3
      }
    }
  };

  return (
    <div
      className={`related-product-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          titleText={strings['related_products']}
          positionClass="text-center"
          spaceClass="mb-50"
        />
        <div className="row">
          <Swiper {...settings}>
            <ProductGrid
              category={category}
              limit={6}
              sliderClassName="swiper-slide m-2"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  strings:PropTypes.object
};

export default multilanguage(RelatedProductSlider);
