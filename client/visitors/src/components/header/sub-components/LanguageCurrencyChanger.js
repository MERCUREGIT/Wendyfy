import PropTypes from "prop-types";
import React from "react";
import {changeLanguage, multilanguage} from "redux-multilanguage";

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch,
    strings
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    console.log(currencyName)
    setCurrency(currencyName);
  };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          {currentLanguageCode === "fr"
            ? "French"
            : currentLanguageCode === "en"
            ? "English"
            : currentLanguageCode === "de"
            ? "Germany"
            : currentLanguageCode === "ru"
            ? "Russe"
            : ""}
            
            {" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="en" onClick={e => changeLanguageTrigger(e)}>
                English
              </button>
            </li>
            <li>
              <button value="fr" onClick={e => changeLanguageTrigger(e)}>
                French
              </button>
            </li>
            <li>
              <button value="de" onClick={e => changeLanguageTrigger(e)}>
                Germany
              </button>
            </li>
            <li>
              <button value="ru" onClick={e => changeLanguageTrigger(e)}>
                Russe
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-language-currency use-style">
        <span>
          {currency.currencyName} <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            {/* <li>
              <button value="USD" onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={e => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li> */}
            <li>
              <button value="FCFA" onClick={e => setCurrencyTrigger(e)}>
                FCFA
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-language-currency">
        <p> {strings['call_us']} +(237) 679 591 937</p>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
  strings:PropTypes.object
};

export default multilanguage(LanguageCurrencyChanger);
