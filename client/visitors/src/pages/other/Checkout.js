import axios from "axios";
import PropTypes from "prop-types";
import React, {Fragment, useState, useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import MetaTags from "react-meta-tags";
import {connect} from "react-redux";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import {getDiscountPrice} from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Countries from '../../data/countries/country-by-name.json';
import {routes} from '../../config/routes'
import {multilanguage} from "redux-multilanguage";
import LoadingOverlay from 'react-loading-overlay';
import {deleteAllFromCart} from "../../redux/actions/cartActions";
// import {useToasts} from "react-toast-notifications";
import { ToastContainer, toast } from 'react-toastify';
const Checkout = ({location, cartItems, currency, user, strings,deleteAllFromCart}) => {
    let addToast=toast.error
    // const { addToast } = useToasts();
    const {pathname} = location;
    let cartTotalPrice = 0;
    const history = useHistory();
    const [name, handleName] = useState(user.username !== "" ? user.username : "");
    const [country, handleCountry] = useState('');
    const [city, handleCity] = useState('');
    const paymentDetails = {};
    const [isLoading, setIsLoading] = useState(false);
    const [order, setOrder] = useState({});
    const error = false;
    
    let CinetPay = window.CinetPay;

    const handlePayment = async () => {
        if (isLoading) {
            return;
        }
        if(order._id){
            CinetPay.setSignatureData({
                amount: parseInt(document.getElementById('amount').value),
                trans_id: document.getElementById('trans_id').value,
                currency: document.getElementById('currency').value,
                designation: document.getElementById('designation').value,
                custom: document.getElementById('cpm_custom').value,
                // cel_phone_num: '696076817',
                cpm_phone_prefixe:'237'
            });
            CinetPay.getSignature();
            return;
        }
        setIsLoading(true)
        let payload =  {
            name: name,
            country: country,
            city: city,
            paymentDetails: paymentDetails,
            productOrders: cartItems,
            id: user.userid,
            currency: currency.currencySymbol,
            amount: cartTotalPrice.toFixed(2)
        };
        let axiosConfig = { headers: { 'Content-Type' : 'application/json',"Access-Control-Allow-Origin": "*", }};
        axios.post(`${routes.server}/order/`, JSON.stringify(payload), axiosConfig).then(r => {
            setOrder(r.data)
            CinetPay.setSignatureData({
                amount: parseInt(document.getElementById('amount').value),
                trans_id: document.getElementById('trans_id').value,
                currency: document.getElementById('currency').value,
                designation: document.getElementById('designation').value,
                custom: document.getElementById('cpm_custom').value,
                // cel_phone_num: '697835780',
                cpm_phone_prefixe:'237'
            });
            CinetPay.getSignature();
        }).catch(e => {
            setIsLoading(false)
            addToast(strings['subs_connection_error'])
            history.push("/checkout")
        }).finally(e => {
        });
    }

    useEffect(() => {
        CinetPay.setConfig({
            apikey: '8936433616017f33cc7a2b9.78720038',
            site_id: 302789,
            notify_url: routes.notify_url_cinetpay,
            return_url:"https/wendyfy.com/listener",
            cancel:"https/wendyfy.com/listener",
        });

        CinetPay.on('error', function (e) {
            setIsLoading(false)
            addToast(strings['subs_connection_error'] + "Errore code :"+ e.code +"Message :" + e.message )
        });
        CinetPay.on('paymentPending', function (e) {
            
            addToast(strings['subs_connection_error'] + 'code:' + e.code + 'Message::' + e.message )
            console.log("payment pending")
            
        });
        CinetPay.on('signatureCreated', function () {
          
            console.log("payment pending")
        })
        CinetPay.on('paymentSuccessfull', function (paymentInfo) {
            if(typeof paymentInfo.lastTime != 'undefined'){
                if(paymentInfo.cpm_result === '00'){
                    toast.success(strings['payment_completed'])
                    deleteAllFromCart(false)
                    history.push("/my-account")
                }else{
                    deleteAllFromCart(false)
                    history.push("/my-account")
                    addToast(strings['subs_connection_error'] + paymentInfo.cpm_error_message)
                }
            }
        });
    })

    return (
        <Fragment>
            <ToastContainer />
            <MetaTags>
                <title>Wendy Fy | Checkout</title>
                <meta
                    name="description"
                    content="Checkout page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings['home']}</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                {strings['payment']}
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb/>
                <div className="checkout-area pt-95 pb-100">
                    <div className="container">
                        {cartItems && cartItems.length >= 1 ? (
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="billing-info-wrap">
                                        <h3>{strings['payment_details']}</h3>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="billing-info mb-20">
                                                    <label>{strings['name_and_surname']}</label>
                                                    <input type="text" value={name}
                                                           onChange={e => handleName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="billing-select mb-20">
                                                    <label>{strings['country']}</label>
                                                    <select onChange={e => handleCountry(e.target.value)} name="pays">
                                                        <option>{strings['choose_a_country']}</option>
                                                        {Countries.map(country => <option key={country.country}
                                                                                          value={country.country}>{country.country}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="billing-info mb-20">
                                                    <label>{strings['town_and_quarter']}</label>
                                                    <input type="text" onChange={e => handleCity(e.target.value)}
                                                           value={city}/>
                                                </div>
                                            </div>
                                            {/*    <div className="col-lg-12">
                        <div className="billing-info">
                          <label>{strings['payment_methods']}</label>
                        </div>
                        <PaymentMode strings={strings} handlePaymentDetails={handlePaymentDetails} paymentDetails={paymentDetails} />
                      </div>*/}
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="your-order-area">
                                        <h3>{strings['your_buys']}</h3>
                                        <div className="your-order-wrap gray-bg-4">
                                            <div className="your-order-product-info">
                                                <div className="your-order-top">
                                                    <ul>
                                                        <li>{strings['product']}</li>
                                                        <li>{strings['total']}</li>
                                                    </ul>
                                                </div>
                                                <div className="your-order-middle">
                                                    <ul>
                                                        {cartItems.map((cartItem, key) => {
                                                            const discountedPrice = getDiscountPrice(
                                                                cartItem.price,
                                                                cartItem.discount
                                                            );
                                                            const finalProductPrice = (
                                                                cartItem.price * currency.currencyRate
                                                            ).toFixed(2);
                                                            const finalDiscountedPrice = (
                                                                discountedPrice * currency.currencyRate
                                                            ).toFixed(2);

                                                            discountedPrice != null
                                                                ? (cartTotalPrice +=
                                                                finalDiscountedPrice * cartItem.quantity)
                                                                : (cartTotalPrice +=
                                                                finalProductPrice * cartItem.quantity);
                                                            return (
                                                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                                                    <span className="order-price">
                                    {discountedPrice !== null
                                        ? currency.currencySymbol +
                                        (
                                            finalDiscountedPrice *
                                            cartItem.quantity
                                        ).toFixed(2)
                                        : currency.currencySymbol +
                                        (
                                            finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>

                                                <div className="your-order-total">
                                                    <ul>
                                                        <li className="order-total">{strings['total']}</li>
                                                        <li>
                                                            {currency.currencySymbol +
                                                            cartTotalPrice.toFixed(2)}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="payment-method"></div>
                                        </div>
                                        {error &&
                                        <center><p style={{color: "red"}}>{error}</p>
                                        </center>}
                                        <div className="place-order mt-25">
                                            <LoadingOverlay
                                                active={isLoading}
                                                spinner
                                                text='Loading your content...'
                                            >
                                            </LoadingOverlay>
                                            <button onClick={handlePayment} disabled={isLoading}
                                                    className="btn-hover">{strings['effectuate_payment']}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="item-empty-area text-center">
                                        <div className="item-empty-area__icon mb-30">
                                            <i className="pe-7s-cash"></i>
                                        </div>
                                        <div className="item-empty-area__text">
                                            {strings['no_items_found_to_cart']} <br/>{" "}
                                            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                                                {strings['shop_now']}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </LayoutOne>
            {/*<form>*/}
            {order._id && <div id="info_paiement">
                <input type="hidden" id="amount" value={cartTotalPrice.toFixed(2)}/>

                <input type="hidden" id="currency" value="XAF"/>

                <input type="hidden" id="trans_id" value={order._id}/>

                <input type="hidden" id="cpm_custom" value=""/>

                <input type="hidden" id="designation" value={strings['payment_for_order'] + " - #" + order._id}/>
            </div>}
            {/*</form>*/}

        </Fragment>
    );
};

Checkout.propTypes = {
    cartItems: PropTypes.array,
    currency: PropTypes.object,
    location: PropTypes.object,
    strings: PropTypes.object,
    deleteAllFromCart:PropTypes.func
};

const mapStateToProps = state => {
    return {
        user: state.authentication,
        cartItems: state.cartData,
        currency: state.currencyData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteAllFromCart: addToast => {
            dispatch(deleteAllFromCart(addToast));
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(multilanguage(Checkout));
