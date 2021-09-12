import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
import { setCurrency } from "../../redux/actions/currencyActions";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";

const HeaderTop = ({

  currency,
  setCurrency,
  currentLanguageCode,
  dispatch,
  borderStyle,
    strings
}) => {
  return (
    <div
      className={`header-top-wap ${
        borderStyle === "fluid-border" ? "border-bottom" : ""
      }`}
    >
       <div >
        <ul>
          <span style={{margin:'5px'}}>
            <a href="https://www.facebook.com/wendybyfy">
            <i className="fa fa-facebook"></i>
            </a>
          </span>
          <span style={{margin:'5px'}}>
            <a href="https://www.instagram.com/wendyfy_237/">
              <i className="fa fa-instagram"></i>
            </a>
          </span>
        </ul>
      </div>
      <LanguageCurrencyChanger
        currency={currency}
        setCurrency={setCurrency}
        currentLanguageCode={currentLanguageCode}
        dispatch={dispatch}
      />
     
      <div className="header-offer">
        <p>
          {strings['free_delivery_on_order_over']} {" "}
          <span>
            {/* {currency.currencySymbol + (200000 * currency.currencyRate).toFixed(2)} */}
            {currency.currencySymbol + (200000).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
  strings:PropTypes.object
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrency: currencyName => {
      dispatch(setCurrency(currencyName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(HeaderTop));
