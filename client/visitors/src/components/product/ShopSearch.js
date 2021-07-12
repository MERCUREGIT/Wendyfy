import React from "react";
import PropTypes from "prop-types";
import {multilanguage} from "redux-multilanguage";

const ShopSearch = (strings) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">{strings['search']} </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" action="#">
          <input type="text" placeholder={strings['search_here']} />
          <button>
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};
ShopSearch.propTypes = {
    strings:PropTypes.object
};

export default multilanguage(ShopSearch);
