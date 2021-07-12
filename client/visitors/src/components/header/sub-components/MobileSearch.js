import React,{useState} from "react";
import { Link } from "react-router-dom";
import {routes} from '../../../config/routes'
import uuid from 'uuid/v4'
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";

const MobileSearch = ({products}) => {
  
  const [productSearchResult, setProductSearchResult]=useState()
  
  const searchElement = (val)=>{

    let searchResult = products.filter(element=> element.name.split(' ').includes(val) || element.shortDescription.split(' ').includes(val) || element.fullDescription.split(' ').includes(val));
    setProductSearchResult(searchResult)
    // handleFilterList(searchResult);
  }
  return (
    <div className="offcanvas-mobile-search-area">
      <form action="#">
        <input type="search" onChange={e=>searchElement(e.target.value)} placeholder="Search ..." />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
      {productSearchResult ? productSearchResult.map((product, index)=><Link to={process.env.PUBLIC_URL + "/product/" + product._id}> <div className="bg-purple row g-0 p-2 my-3" key={uuid()}>
            <div className="col-2">
              <span>{index + 1}</span>
            </div>
            <div className="col-4">
            {product.discount || product.new ? 
              <div className="product-img-badges">
                  {product.discount ? 
                    <span className="pink">-{product.discount}% off</span> : ""}
                  {product.new ? <span className="purple">New</span> : ""}
              </div>: ""
            }
            </div>
            <div className="col-6">
              <img
                  style={{width:"70%"}}
                  className="default-img"
                  src={routes.server +"/" + product.image[0]}
                  alt=""
                />
              <strong className="pt-3 pl-3"> 
                  {product.name}
                </strong>
            </div>
          </div>
          </Link>) : " "
          }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productData.products
  };
};


export default connect(mapStateToProps)(MobileSearch);

