import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import {connect} from "react-redux";

const FooterCopyright = ({strings, footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div style={{marginTop:"-50"}}
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
       {strings["powered_by"] } <strong> Mercury-Tech</strong>
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img  alt="" src={process.env.PUBLIC_URL + footerLogo} />
          
        </Link>
      </div>
      <p>
        © 2020{" "}
        <a href="/mercury-cm.com" rel="noopener noreferrer" target="_blank">
        Wendy Fy 
        </a>
        .<br /> {strings["copy_rights"]}
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default connect()(multilanguage(FooterCopyright));
