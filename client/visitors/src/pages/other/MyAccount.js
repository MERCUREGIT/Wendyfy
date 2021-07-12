import PropTypes, {string} from "prop-types";
import React, {Fragment, useEffect, useState} from "react";
import MetaTags from "react-meta-tags";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {connect} from "react-redux";
import {multilanguage} from "redux-multilanguage";
import {routes} from "../../config/routes";
import axios from 'axios';
import {Button} from "react-bootstrap";
import {toast} from "react-toastify";
import {ToastContainer, toast as t2} from 'react-toastify';

const MyAccount = ({location, authentication, strings}) => {
    const {pathname} = location;

    return (
        <Fragment>
            <MetaTags>
                <title>wendyfy | My Account</title>
                <meta
                    name="description"
                    content="Compare page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings['my_account']}</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                {strings['my_account']}
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb/>
                <div className="myaccount-area pb-80 pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="ml-auto mr-auto col-lg-9">
                                <div className="myaccount-wrapper">
                                    <Accordion defaultActiveKey="0">
                                        <AccountUserProfile authentication={authentication} strings={strings}/>
                                        <UserOrders strings={strings} authentication={authentication}/>
                                        <UserTransactions strings={strings} authentication={authentication}/>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};


MyAccount.propTypes = {
    location: PropTypes.object,
    strings: PropTypes.object
};


const AccountUserProfile = ({authentication, strings}) => {
    console.log(authentication)
    return <Card className="single-my-account mb-20">
        <Card.Header className="panel-heading">
            <Accordion.Toggle variant="link" eventKey="0">
                <h3 className="panel-title">
                    <span>1 .</span> {strings['edit_account_information']}{" "}
                </h3>
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <div className="myaccount-info-wrapper">
                    <div className="account-info-wrapper">
                        <h4>{strings['account_information']} ({authentication.userid}) </h4>
                        <h5>{strings['your_personal_details']}</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>{strings['lr_username']}</label>
                                <input defaultValue={authentication.username} type="text"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                {strings['lr_email']}
                                <label></label>
                                <input defaultValue={authentication.useremail} type="email"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myaccount-info-wrapper">
                    <div className="account-info-wrapper">
                        <h4> {strings['change_password']} </h4>
                        <h5>{strings['your_password']} </h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>{strings['password']}</label>
                                <input type="password"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>{strings['password_confirm']}</label>
                                <input type="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="billing-back-btn">
                        <div className="billing-btn">
                            <button type="submit">{strings['continue']}</button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
}

const UserOrders = ({authentication, strings}) => {
    const [loading, setLoading] = useState(true)
    const [paying, setPaying] = useState(false)
    const [error, setError] = useState(false)
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState({})
    let CinetPay = window.CinetPay;
    let addToast = t2.error
    useEffect(function () {
        CinetPay.setConfig({
            apikey: '8936433616017f33cc7a2b9.78720038',
            site_id: 302789,
            notify_url: routes.notify_url_cinetpay
            // notify_url: 'https://15ac0633fc2d.ngrok.io/api/order/transactions/ipn-update',
            // notify_url: 'https://wendyfy-listener.novobyte.org/cinetpay-php-sdk-master/exemple/notify/index.php',
            // return_url: "https://wendyfy-listener.novobyte.org/cinetpay-php-sdk-master/exemple/return/index.php",
            // cancel:"http://wendyfy-listener.novobyte.org/cinetpay-php-sdk-master/exemple/cancel",
        });

        CinetPay.on('error', function (e) {
            addToast(strings['subs_connection_error'] + ': ' + e.code + ',' + e.message)
            setPaying(false)
        });
        CinetPay.on('paymentPending', function (e) {

        });
        CinetPay.on('signatureCreated', function () {
        })
        CinetPay.on('paymentSuccessfull', function (paymentInfo) {
            if (typeof paymentInfo.lastTime != 'undefined') {
                // result_div.innerHTML = '';
                if (paymentInfo.cpm_result == '00') {
                    toast.success(strings['payment_completed'])
                    setPaying(false)
                    window.location.reload();
                } else {
                    addToast(strings['subs_connection_error'] + ': ' + paymentInfo.cpm_error_message)
                    setPaying(false)
                }
            }
        });

        axios.get(`${routes.server}/order/user/${authentication.userid}`).then(result => {
            setOrders(result.data)
        }).catch(error => {
            setError(true)
        }).finally(e => {
            setLoading(false)
        })
    }, [])
    return <Card className="single-my-account mb-20">
        <ToastContainer/>
        <Card.Header className="panel-heading">
            <Accordion.Toggle variant="link" eventKey="2">
                <h3 className="panel-title">
                    <span>2 .</span> {strings['your_orders']}
                </h3>
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
            <Card.Body>
                <div className="container">
                    <div className="col-lg-12 col-md-12">
                        {loading && <center><p>{strings['loading']}...</p></center>}
                        {error && <center><p style={{color: "red"}}>{strings['subs_connection_error']}...</p></center>}
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#ID</th>
                                <th>{strings['date_time']}</th>
                                <th>{strings['amount']}</th>
                                <th>{strings['state']}</th>
                                <th>{strings['action']}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map(order => {
                                let totalAmount = 0;
                                order.products.forEach(productRefVar => {
                                    console.log(productRefVar)
                                    totalAmount += ((productRefVar.productRef.price - productRefVar.productRef.salePrice) * productRefVar.productVariation[0].sizeStock)
                                })
                                order.amount = totalAmount
                                return <tr>
                                    <td>{strings['order']}-{order._id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.currency} {totalAmount}</td>
                                    <td>{order.isPayed ? strings['state_paid'] : strings['state_not_paid']}</td>
                                    <td>{!order.isPayed && <Button variant="warning" onClick={e => {
                                        if (paying) {
                                            return;
                                        }
                                        setPaying(true)
                                        // alert('ok')
                                        t2.info(strings['loading']);
                                        setOrder(order);
                                        setTimeout(function () {
                                            CinetPay.setSignatureData({
                                                amount: parseInt(document.getElementById('amount').value),
                                                trans_id: document.getElementById('trans_id').value,
                                                currency: document.getElementById('currency').value,
                                                designation: document.getElementById('designation').value,
                                                custom: document.getElementById('cpm_custom').value,
                                                // cel_phone_num: '696076817',
                                                cpm_phone_prefixe: '237'
                                            });
                                            CinetPay.getSignature();
                                        }, 500)
                                    }}
                                                                   style={{color: "white"}}>{strings['pay_now']}</Button>}


                                        <Button variant="dark" onClick={e => {
                                            setTimeout(function () {
                                                global.setModalContent(<div >
                                                    <h3>{strings['order_information']}</h3>
                                                    {order._id && <div>
                                                        <strong>
                                                            {strings['order']}
                                                        </strong>
                                                        <table style={{"width": "100%"}}
                                                               className="table table-bordered">
                                                         {/*   <tr>
                                                                <td>
                                                                    <strong>{strings['user']}:</strong>
                                                                </td>
                                                                <td>{order.name}</td>
                                                            </tr>
                                                            <tr>

                                                                <td>
                                                                    <strong>{strings['email']}:</strong>
                                                                </td>
                                                                <td>{order.user.email}</td>
                                                            </tr>*/}
                                                            <tr>
                                                                <td>
                                                                    <strong>{strings['ordered_on_the']}</strong>
                                                                </td>
                                                                <td>{
                                                                    order
                                                                        .date.split("T").join(" ").split(".")[0]
                                                                }</td>
                                                            </tr>
                                                            <tr>

                                                                <td><strong>{strings['amount']}:</strong>
                                                                </td>
                                                                <td>{order.amount} {
                                                                    order
                                                                        .currency
                                                                } {(order.isPayed && order.paymentStatus && order.paymentStatus.createdAt)?<span
                                                                    style={{color:"green"}}>{strings['paid_on_the']} {
                                                                    order.paymentStatus.createdAt.split("T").join(" ").split(".")[0]
                                                                }</span>:<span
                                                                    style={{color:"red"}}>PAS PAY&Eacute;</span>}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <strong>
                                                            {strings['product']}
                                                        </strong>
                                                        {/*
                                                                                      v-for="product in order.products"
                                                                                      v-bind:key="product.productRef._id*/}
                                                        {order.products.map(product => <table
                                                            style={{"width": "100%"}}
                                                            className="table table-bordered">

                                                            <tr>
                                                                <td rowSpan="5">
                                                                    <img
                                                                        src={product.productRef.image[0]}
                                                                        height="150"/>
                                                                </td>
                                                                <td>{
                                                                    product
                                                                        .productRef.name
                                                                } (x{
                                                                    product
                                                                        .productVariation[0].sizeStock
                                                                })
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>{strings['color']}: </strong>{
                                                                    product
                                                                        .productVariation[0].color
                                                                }</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <strong>{strings['size']}: </strong>{
                                                                    product
                                                                        .productVariation[0].sizeName
                                                                }</td>
                                                            </tr>
                                                        </table>)}


                                                    </div>}
                                                </div>)
                                            }, 500)
                                        }} style={{color: "white",marginTop:10}}>
                                            {strings['view_more']}
                                        </Button>









                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </Table>
                    </div>
                    {order._id && <div id="info_paiement">
                        <input type="hidden" id="amount" value={order.amount.toFixed(2)}/>

                        <input type="hidden" id="currency" value="XAF"/>

                        <input type="hidden" id="trans_id" value={order._id + "_" + Math.random()}/>

                        <input type="hidden" id="cpm_custom" value={authentication.userid + "/" + order._id}/>

                        <input type="hidden" id="designation"
                               value={strings['payment_for_order'] + " - #" + order._id}/>
                    </div>}
                </div>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
}

const UserTransactions = ({authentication, strings}) => {
    const [loading, setLoading] = useState(true)
    const [paying, setPaying] = useState(false)
    const [error, setError] = useState(false)
    const [transactions, setTransactions] = useState([])
    let addToast = t2.error
    useEffect(function () {
        axios.get(`${routes.server}/order/transactions/${authentication.userid}`).then(result => {
            setTransactions(result.data)
        }).catch(error => {
            setError(true)
        }).finally(e => {
            setLoading(false)
        })
    }, [])
    return <Card className="single-my-account mb-20">
        <ToastContainer/>
        <Card.Header className="panel-heading">
            <Accordion.Toggle variant="link" eventKey="2">
                <h3 className="panel-title">
                    <span>3 .</span> {strings['your_transactions']}
                </h3>
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
            <Card.Body>
                <div className="container">
                    <div className="col-lg-12 col-md-12">
                        {loading && <center><p>{strings['loading']}...</p></center>}
                        {error && <center><p style={{color: "red"}}>{strings['subs_connection_error']}...</p></center>}
                        <div style={{display: "flex", marginBottom: 10}}>
                            <div>
                                <center><h1
                                    style={{margin: 0}}>{transactions.filter(transaction => transaction.completed).length}</h1>
                                    <small>{strings['completed']}</small>

                                </center>
                            </div>
                            <div style={{marginLeft: 20}}>
                                <center><h1
                                    style={{margin: 0}}>{transactions.filter(transaction => !transaction.completed).length}</h1>
                                    <small>{strings['failed']}</small></center>
                            </div>
                        </div>


                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#ID</th>
                                <th>{strings['order']}</th>
                                <th>{strings['date_time']}</th>
                                <th>{strings['amount']}</th>
                                <th>{strings['state']}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {transactions.map(transaction => {
                                return <tr>
                                    <td>{transaction._id}</td>
                                    <td>{strings['order']}-{transaction.order._id}</td>
                                    <td>{transaction.createdAt.split("T").join(" ").split(".")[0]}</td>
                                    <td>{transaction.order.currency} {transaction.amount}</td>
                                    <td style={{
                                        color: transaction.completed ? "green" : "red",
                                        fontWeight: "bolder"
                                    }}>{transaction.completed ? strings['completed'] : strings['failed']}</td>
                                </tr>
                            })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
}


const mapStateToProps = state => {
    return {
        authentication: state.authentication
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};


export default connect(mapStateToProps)(multilanguage(MyAccount));