import PropTypes from "prop-types";
import React, {Fragment, useEffect, useState} from "react";
import MetaTags from "react-meta-tags";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import Table from "react-bootstrap/Table"
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {connect} from "react-redux";
import {multilanguage} from "redux-multilanguage";
import {routes} from "../../config/routes";
import axios from 'axios';
import {Button} from "react-bootstrap";
import moment from "moment";
import uuid from "uuid/v4";
// import {toast} from "react-toastify";
import {ToastContainer, toast as t2} from 'react-toastify';

const MyAccount = ({location, authentication, strings}) => {
    const {pathname} = location;

    return (
        <Fragment>
            <MetaTags>
                <title>wendyfy | My Account</title>
                <meta
                    name="description"
                    content="Compare page of wendy eCommerce site."
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
                        <div className="row justify-content-center">
                            <div className="ml-auto mr-auto col-lg-9">
                                <div className="myaccount-wrapper">
                                    <Accordion defaultActiveKey="0">
                                        <AccountUserProfile authentication={authentication} strings={strings}/>
                                        <UserOrders strings={strings} authentication={authentication}/>
                                        <UserSpecialOrders strings={strings} authentication={authentication}/>
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

    const initialState =  {
        username:authentication.username,
        _id:authentication.userid,
        useremail:authentication.useremail,
        newPassword:"",
        passwordComfirmation:""
    }
    const [editAccount, setIsEditAccount] = useState(true)
    const [editAccountContinue, setIsEditAccountContinue] = useState(false)
    const [accountDetails, setAccountDetails] = useState(initialState)
   
    return <Accordion.Item eventKey="0">           
        <Accordion.Header> {strings['edit_account_information']}{" "}</Accordion.Header>
        <ToastContainer />
        <Accordion.Body>
                <div className="myaccount-info-wrapper">
                    <div className="account-info-wrapper">
                        <div className ="container">
                            <div className="row">
                                <div className="col">
                                    <h4>{strings['account_information']} ({authentication.userid}) </h4>
                                    <h5>{strings['your_personal_details']}</h5>
                                </div>
                                <div className="col">
                                     <Button className="btn btn-lg btn-hover btn-danger btn-hover" onClick={()=>  setIsEditAccount(!editAccount) }> { editAccount?   strings['edit'] :strings['cancel'] } 
                                     </Button> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>{strings['lr_username']}</label>
                                <input disabled= {true} defaultValue={accountDetails.username}  type="text"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                {strings['lr_email']}
                                <label></label>
                                <input onChange={(e)=>{
                                    setAccountDetails({ ...accountDetails,  useremail:e.target.value})
                                    }} disabled= {true} defaultValue={accountDetails.useremail} type="email"/>
                            </div>
                        </div>
                    </div>
                </div>
                
               { !editAccount ? <div className="myaccount-info-wrapper">
               { !editAccountContinue ?  <>
                    <div className="account-info-wrapper">
                        <h4> {strings['change_password']} </h4>
                        <h5>{strings['your_password']} </h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>{ 'new ' + strings['password']}</label>
                                <input type="password" onChange={(e)=>{
                                    setAccountDetails({ ...accountDetails,  newPassword:e.target.value})
                                    }} />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                                <label>{strings['password_confirm']}</label>
                                <input type="password" onChange={(e)=>{
                                    setAccountDetails({ ...accountDetails,  passwordComfirmation:e.target.value})
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className="billing-back-btn">
                        <div className="billing-btn">
                            <button onClick={()=>{
                                if(accountDetails.passwordComfirmation === accountDetails.newPassword ){

                                    setIsEditAccountContinue(!editAccountContinue)
                                }
                                else{
                                   alert("Le nouveu mot de passe ne correspond pas avec ca comfirmation");
                                   return; 
                                }
                            }} >{strings['continue']}</button>
                        </div>
                    </div>
                    </> : <div className="row">
                            <div className="m-5 billing-back-btn">
                                <div className="billing-btn">
                                    <button type="submit" onClick={()=>{
                                        axios.post( `${routes.server}/authentication/user/edit/${authentication.userid}`, JSON.stringify(accountDetails), { headers: { 'Content-Type' : 'application/json;charset=UTF-8',"Access-Control-Allow-Origin": "*", }})
                                        .then(r=>{
                                            t2.success("Mots de passe modifier avec success")
                                            setIsEditAccount(!editAccount);
                                            setIsEditAccountContinue(!editAccountContinue);
                                        })
                                        .catch(err=>{
                                            t2.error("echec de modification");
                                        })
                                    }} >{strings['comfirm']}</button>
                                </div>
                            </div> 
                            <div className=" m-5 billing-back-btn">
                                <div className="billing-btn">
                                    <button onClick={()=> {
                                        setIsEditAccount(!editAccount);
                                        setIsEditAccountContinue(!editAccountContinue);
                                        }  } > &#128473; {strings['cancel']}</button>
                                </div>
                            </div> 
                        </div>    
                    }
                </div> : ""}
        </Accordion.Body>
    </Accordion.Item >
}

 const UserOrders = ({authentication, strings}) => {
    const [loading, setLoading] = useState(true)
    const [error, setIsError] = useState(false)
    const [orders, setOrder] = useState([])


    useEffect(()=>{
        if(loading){
        axios.get(`${routes.server}/order/transactions/${authentication.userid}`)
       .then((r)=>{
        //    console.log(r.data)
        setOrder(r.data)
        setLoading(!loading)})
        .catch(err=>{
            setIsError(!error)
            setLoading(!loading)
        })
       
    
    }
        else{

        }
    },[authentication.userid,error,loading, orders])
    return <Accordion.Item eventKey="1">
        <ToastContainer/>
        <Accordion.Header className="panel-heading">
                    {strings['your_orders']}
        </Accordion.Header>
            <Accordion.Body>
                <div className="container">
                    <div className="col-lg-12 col-md-12">
                        {loading && <center><p>{strings['loading']}...</p></center>}
                        {error && <center><p style={{color: "red"}}>{strings['subs_connection_error']}...</p></center>}
                        <Table style={{maxWidth:"100vw"}} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>{strings['order']}-#ID</th>
                                    <th>{strings['date_time']}</th>
                                    <th>{strings['amount']}</th>
                                    <th>{strings['state']}</th>
                                    <th>{strings['action']}</th>
                                </tr>
                            </thead>
                                {orders.map(order => {
                                    return <UserSingleTransaction key={order._id} order={order} strings={strings} />})}
                        </Table>
                    </div>
                </div>
            </Accordion.Body>
    </Accordion.Item >
}

const UserSingleTransaction = ({order, strings}) => {
    const [seeDetails, setSeedetails] = useState(false)

    const filterOrder = (productVariation =[], orderVariations)=>{
        let orderVariationsList= [...orderVariations];
        // Color: rouge nkara  Size: Xl  compare them in terms of colors and size
        orderVariations.forEach((element, index) => {
           productVariation.filter((value)=>{
               if(value.color === element.color){
                   orderVariationsList[index].image = value.image;
                   return true
               }
                return false
            });
        });
        return orderVariationsList;
    }
    return  <tbody>
            <tr key={order._id}>
                <td>{order._id}</td>
                <td>{ moment(order.updated_at).format('MMMM d, YYYY')}</td>
                <td>{order.cpm_currency} {order.cpm_amount}</td>
                <td>{strings['state_paid']}</td>
                <td onClick={()=>setSeedetails(!seeDetails)}> {!seeDetails ? <>Details &#9776;</> : <span style={{color:"red"}}>{strings["close"]}  &#128473;</span> }</td>
            </tr>
            { seeDetails && order.orderInfo ? order.orderInfo.products.map(el=>{
               return <tr style={{width:"100%"}} key={el._id} >
                    <td colSpan= "5" style={{width:"100%"}}>
                        <div  className="container">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <img style={{width:"100%"}} alt='main product' src = { el.productRef.image[0]} />
                                </div>
                                <div  className="col-md-8 col-12">
                                    <span><h4> <strong>{strings["product_name"]} </strong> : {el.productRef.name}</h4> </span>
                                    <span><h4> <strong>{strings["unit_price"]} </strong> : <span style={{textDecoration:"line-through"}}>{el.productRef.price}</span> | {el.productRef.salePrice}</h4> </span>
                                    <span><h4> <strong>{strings["discount"]} </strong> : -{el.productRef.discount}</h4> </span>
                                    <p>{el.productRef.shortDescription.slice(0, 100)}... </p>
                                    <p>{order.orderInfo.deliveryStatus ? "Livrée" : "Non Livrée"}...  </p>
                                    <hr/>
                                    <p className="text-center"  ><strong > Variation du produit selectioner </strong></p>
                                    {filterOrder(el.productRef.variation, el.productVariation).map(variation=>{
                                       return <div key={uuid()} className="container shadow rounded">
                                            <div className="row">
                                                <div className="col-md-5 col-12">
                                                    <img alt='product variation' style={{maxWidth:"100%"}} src = {variation.image || ""} />
                                                </div>
                                                <div className="col-md-7 col-12 my-auto">
                                                <span><strong style={{color:"grey"}}>{strings["size"]} </strong> : {variation.sizeName} </span>
                                                <span><h5> <strong style={{color:"grey"}}>{strings["qty"]} </strong> : {variation.sizeStock}</h5> </span>
                                                <span><h5> <strong style={{color:"grey"}}>{strings["color"]} </strong> : {variation.color}</h5> </span>
                                                <span><h5> <strong style={{color:"grey"}}>{strings["cost"]} </strong> : {variation.sizeStock} &#128473; {el.productRef.salePrice} : {variation.sizeStock * el.productRef.salePrice} </h5> </span>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                    {/* {} */}
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>}
                ) : <tr></tr>}
            </tbody>
            
}

const UserSpecialOrders = ({authentication, strings}) => {
    const [specialOrder, setSpecialOrder] = useState([])
    useEffect(()=> {
        axios.get(`${routes.server}/special-order/single/${authentication.userid}`)
            .then(result => {
                console.log(result)
                setSpecialOrder(result.data)})
            .catch(error => {
                    console.error(error)
                })
                .finally(e => {
        })
    },[authentication.userid] )
  
    return <Accordion.Item eventKey="2">
        <ToastContainer/>
        <Accordion.Header className="panel-heading">
           {strings['take_measures']}
        </Accordion.Header>
            <Accordion.Body>
                <div className="container">
                    <div className="col-lg-12 col-md-12">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#ID</th>
                                {/* <th>{strings['order']}</th> */}
                                <th>{strings['date_time']}</th>
                                <th>{strings['amount']}</th>
                                <th>{strings['state']}</th>
                            </tr>
                            </thead>
                            {specialOrder.map(order => <UserSingleSpecialOrder order={order} strings={strings} key={order._id}/>)}
                        </Table>
                    </div>
                </div>
            </Accordion.Body>
    </Accordion.Item>
}


const UserSingleSpecialOrder = ({order, strings}) => {
    const [seeDetails, setSeedetails] = useState(false)

    function mapObjectKeyValuePaireToArray(obj){
        let keyValuePairArray= [];
        for (const [key, value] of Object.entries(obj)) {
            keyValuePairArray.push({ key:key,value: value });
          }
          return keyValuePairArray
    }
    return  <tbody>
            <tr>
                <td>{order._id}</td>
                <td>{ moment(order.updated_at).format('MMMM Do, YYYY')}</td>
                <td>{order.deliveryStatus}</td>
                <td style={{color: order.isPayed ? "green" : "blue", fontWeight: "bolder" }}>
                    {order.isPayed ? strings['delivered'] : strings['un_processed']}
                </td>
                <td onClick={()=>setSeedetails(!seeDetails)}>
                    {!seeDetails ? <>Details &#9776;</> : <span style={{color:"red"}}>{strings["close"]}  &#128473;</span> }
                </td>
            </tr>
            { seeDetails ? <tr style={{width:"100%"}} >
                    <td colSpan= "5" style={{width:"100%"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    { typeof order.productMeasures !== 'undefined' ? mapObjectKeyValuePaireToArray(order.productMeasures).map(el=>{
                                    return <p key= {el.key}> <strong>{el.key} :</strong> {el.value} </p>}): "RAS"}
                                </div>
                                <div  className="col-md-8 col-12">  
                                       <p>
                                           {order.user.city}
                                       </p>
                                       <p>
                                          {order.user.country}
                                       </p>
                                       <p>
                                        {order.user.email}
                                       </p>
                                       <p>
                                          {order.user.gender}
                                       </p>
                                       <p>
                                          {order.user.name}
                                       </p>
                                       <p>
                                          {order.user.telephone}
                                       </p>            
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>: ""}
            </tbody>
}

const mapStateToProps = state => {
    return {
        authentication: state.authentication
    };
};



export default connect(mapStateToProps)(multilanguage(MyAccount));