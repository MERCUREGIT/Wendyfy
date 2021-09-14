import PropTypes from "prop-types";
import React, {Fragment, useState} from "react";
import MetaTags from "react-meta-tags";
import {useHistory} from "react-router-dom";
import {useToasts} from "react-toast-notifications";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import validator from 'validator' ;
import Nav from "react-bootstrap/Nav";
import {connect} from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";
import {login, successLogin, signUp} from '../../redux/actions/authenticationAction'
import {routes} from "../../config/routes";
import Loader from "react-loader-spinner";
import {multilanguage} from "redux-multilanguage";

const LoginRegister = ({location, login, register, successLogin,strings}) => {

    const validatePhoneNumber = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
       }

    let history = useHistory();
    const {addToast} = useToasts();
    const [telIsValid, handleTelIsValid] = useState(false);
    const {pathname} = location;
    const [userName, userNameHandler] = useState("")
    const [password, passwordHandler] = useState("")
    const [email, emailHandler] = useState()
    const [telephone, telephoneHandler] = useState()
    const [loading, setLoading] = useState(false)
    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('')


    const submitForm = () => {
        setError1('')
        if (!email || !password) {
            setError1(strings['lr_all_fields_obligatory']);
            return
        }
        setLoading(true)
        axios.post(`${routes.server}/authentication/login`, {email: email, password: password})
            .then(response => {
                userNameHandler("");
                passwordHandler("");
                emailHandler("");
                telephoneHandler("");

                if (response.status === 200) {
                    let data = response.data;
                    console.log(data);

                    login(data.username, data.user, addToast, data.email);
                    successLogin();
                    history.push(`${process.env.PUBLIC_URL + "/"}`);
                }
            }).catch(e => {
                // if(typeof e.)
            if (e.response.data){
                setError1(e.response.data.err)
            } else{
                setError1(strings["lr_try_again"])
            }
           
        }).finally(() => {
            setLoading(false)
        })
    }

    const registrationForm = () => {
        setError2('')
        if (!email || !password || !userName || !telephone) {
            setError2(strings['lr_all_fields_obligatory']);
            return
        }
        setLoading(true)
        axios.post(`${routes.server}/authentication/sign-up`,
            {email: email, password: password, username: userName, telephone: telephone})
            .then(response => {
                if (response.status === 200) {
                    let data = response.data;
                    register(data.username, data.user, addToast, data.email);
                    successLogin();
                    history.push(`${process.env.PUBLIC_URL + "/"}`);

                }
            }).catch(e => {
               
                if (e.response.data){
                    console.log(e.response.data.err)
                    setError2(e.response.data.err)
                } else{
                    setError2(strings["lr_try_again"])
                }
        }).finally(() => {
            setLoading(false)
        })
    }


    return (
        <Fragment>
            <MetaTags>
                <title>Wendy Fy</title>
                <meta
                    name="description"
                    content="Compare page of wendyfy react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                {strings["connect"]}
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb/>
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                                <div className="login-register-wrapper">
                                    <Tab.Container defaultActiveKey="login">
                                        <Nav variant="pills" className="login-register-tab-list">
                                            <Nav.Item>
                                                <Nav.Link eventKey="login">
                                                    <h4>{strings['lr_login']}</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="register">
                                                    <h4>{strings['lr_create_account']}</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="login">
                                                <div className="login-form-container">
                                                    <div className="login-register-form">
                                                        <form onSubmit={e => {
                                                            e.preventDefault()
                                                            submitForm()
                                                        }}>
                                                            <input
                                                                type="email"
                                                                name="user-name"
                                                                placeholder={strings['lr_email']}
                                                                value={email}
                                                                onChange={e => emailHandler(e.target.value)}
                                                            />
                                                            <input
                                                                type="password"
                                                                name="user-password"
                                                                placeholder={strings['lr_user_password']}
                                                                value={password}
                                                                onChange={e => passwordHandler(e.target.value)}
                                                            />
                                                            <div className="button-box">
                                                                {error1 && <p style={{color: "red"}}>{error1}</p>}
                                                                <button type="submit">
                                                                    {loading ? <Loader
                                                                        type="Oval"
                                                                        color="#FFC700"
                                                                        height={20}
                                                                        width={20}
                                                                    /> : <span>{strings['lr_log_me_in']}</span>}

                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="register">
                                                <div className="login-form-container">
                                                    <div className="login-register-form">
                                                        <form onSubmit={e => {
                                                            e.preventDefault()
                                                            registrationForm()
                                                        }}>
                                                            <input
                                                                type="text"
                                                                name="user-name"
                                                                placeholder={strings['lr_username']}
                                                                value={userName}
                                                                onChange={e => userNameHandler(e.target.value)}
                                                            />
                                                              {!telIsValid && telephone !=='' ? <span style={{color:"red"}}>
                                                                <br/>
                                                                Numero de telepphone n'est pas valide</span> : ""}
                                                            <input
                                                                type="text"
                                                                name="user-telephone"
                                                                value={telephone}
                                                                data-fv-field="phone_num"
                                                                placeholder={strings['lr_userphonenumber']}
                                                                // pattern ='(\+237|\237)\s(6|2)(2|3|[5-9])[0-9]{7}'
                                                                onChange={e =>{
                                                                        telephoneHandler(e.target.value)
                                                                       if(validatePhoneNumber(e.target.value)){
                                                                        handleTelIsValid(true);
                                                                        return
                                                                       }
                                                                       
                                                                       handleTelIsValid(false)
                                                                    //    set that its bad number
                                                                 }}
                                                            />
                                                            <input
                                                                type="password"
                                                                name="user-password"
                                                                placeholder={strings['lr_user_password']}
                                                                value={password}
                                                                onChange={e => passwordHandler(e.target.value)}
                                                            />
                                                            <input
                                                                name="user-email"
                                                                placeholder={strings['lr_email']}
                                                                type="email"
                                                                value={email}
                                                                onChange={e => emailHandler(e.target.value)}
                                                            />
                                                            {error2 && <p style={{color: "red"}}>{error2}</p>}
                                                            <div className="button-box">
                                                                <button type="submit" disabled={loading}>
                                                                    {loading ? <Loader
                                                                        type="Oval"
                                                                        color="#FFC700"
                                                                        height={20}
                                                                        width={20}
                                                                    /> : <span>{strings['lr_send']}</span>}

                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {

    return {
        login: (username, userId, addToast, useremail, accessToken, refreshToken) => dispatch(login(username, userId, addToast, useremail, accessToken, refreshToken)),
        register: (username, userId, addToast, useremail) => dispatch(signUp(username, userId, addToast, useremail)),
        successLogin: () => dispatch(successLogin())
    };
};


LoginRegister.propTypes = {
    location: PropTypes.object,
    strings: PropTypes.object
};

export default connect(null, mapDispatchToProps)(multilanguage(LoginRegister));
;
