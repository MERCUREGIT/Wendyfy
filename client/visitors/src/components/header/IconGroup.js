import PropTypes from "prop-types";
import React, {useState} from "react";
import { Link  } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { logout } from "../../redux/actions/authenticationAction";
import { multilanguage } from "redux-multilanguage";
import {routes} from '../../config/routes'
import uuid from 'uuid/v4'
const IconGroup = ({
  handleFilterList,
  products,
  currency,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass,
  authentication,
  logout,
  strings
}) => {

  const [productSearchResult, setProductSearchResult]=useState()

  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const logoutUser = ()=>{
    logout();
  }

  const searchElement = (val)=>{

    let searchResult = products.filter(element=> element.name.split(' ').includes(val) || element.shortDescription.split(' ').includes(val) || element.fullDescription.split(' ').includes(val));
    setProductSearchResult(searchResult)
    // handleFilterList(searchResult);
  }

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
       
      {authentication.username !== "" && authentication.login? <div style={{textAlign:'center'}}> <h6 style={{fontWeight:"bold", marginTop:5, textAlign:'center'}}> {authentication.username.split(" ")[0]} </h6></div> : ""}
      <div className="same-style account-setting d-none d-lg-block">
        <button title={strings["my_account"]}
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
             
                { authentication.login ?<Link to={process.env.PUBLIC_URL + "/"} onClick={logoutUser}>{strings["log_out"]}</Link>
                : <Link to={process.env.PUBLIC_URL + "/login-register"}>{strings["Log_in"]}</Link>}
               
            </li>
    
           { authentication.login ? 
            <li>
            <Link to={process.env.PUBLIC_URL + "/my-account"}>
            {strings["my_account"]}
            </Link>
          </li>:
           <li>
           <Link to={process.env.PUBLIC_URL + "/login-register"}>
             {strings["login_register"]}
           </Link>
           <Link to={process.env.PUBLIC_URL + "/login-register"}>
             {"login"}
           </Link>
         </li>
           }
          </ul>
        </div>
      </div>
      
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={e => handleClick(e)} title={strings['search']}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" onChange={e=>searchElement(e.target.value)} placeholder={strings['search']} />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
          <div>

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
                  src={product.image[0]}
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
        </div>
      </div>
      <div className="same-style header-compare" title={strings['compare']}>
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style header-wishlist" title={strings['wishlist']}>
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block" title={strings['cart']}>
        <button className="icon-cart" onClick={e => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          cartData={cartData}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-xl-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    products: state.productData.products,
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
    authentication:state.authentication
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    logout:() => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(IconGroup));
