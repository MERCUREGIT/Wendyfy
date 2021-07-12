import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGrid from "./ProductGrid";
import { multilanguage } from "redux-multilanguage";

const TabProduct = ({
  strings,
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category
}) => {


  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <Tab.Container defaultActiveKey=  "anyItems">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            <Nav.Item>
              <Nav.Link  eventKey="anyItems">
                <h4> {strings["available_stock"]}</h4>
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link  eventKey="newArrival">
                <h4> {strings["new_arrivals"]}</h4>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="anyItems">
              <div className="row">
                <ProductGrid
                  category={category}
                  type="anyItems"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default multilanguage(TabProduct);
