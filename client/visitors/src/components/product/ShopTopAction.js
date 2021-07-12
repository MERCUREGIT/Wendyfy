import PropTypes from "prop-types";
import React from "react";
import {setActiveLayout} from "../../helpers/product";
import {multilanguage} from "redux-multilanguage";

const ShopTopAction = ({
                           getLayout,
                           getFilterSortParams,
                           productCount,
                           sortedProductCount, strings
                       }) => {
    return (
        <div className="shop-top-bar mb-35">
            <div className="select-shoing-wrap">
                <div className="shop-select">
                    <select
                        onChange={e => getFilterSortParams("filterSort", e.target.value)}
                    >
                        <option value="default">{strings["default"]}</option>
                        <option value="priceHighToLow">{strings["price_high_low"]}</option>
                        <option value="priceLowToHigh">{strings["price_low_high"]}</option>
                    </select>
                </div>
                <p>
                    {strings['showing']} {sortedProductCount} {strings['of']} {productCount} {strings['result']}
                </p>
            </div>

            <div className="shop-tab">
                <button
                    onClick={e => {
                        getLayout("grid two-column");
                        setActiveLayout(e);
                    }}
                >
                    <i className="fa fa-th-large"/>
                </button>
                <button
                    onClick={e => {
                        getLayout("grid three-column");
                        setActiveLayout(e);
                    }}
                >
                    <i className="fa fa-th"/>
                </button>
                <button
                    onClick={e => {
                        getLayout("list");
                        setActiveLayout(e);
                    }}
                >
                    <i className="fa fa-list-ul"/>
                </button>
            </div>
        </div>
    );
};

ShopTopAction.propTypes = {
    getFilterSortParams: PropTypes.func,
    getLayout: PropTypes.func,
    productCount: PropTypes.number,
    sortedProductCount: PropTypes.number,
    strings: PropTypes.object
};

export default multilanguage(ShopTopAction);
