import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import { routes } from "../../config/routes";
import axios from 'axios';
import Loader from "react-loader-spinner";
import {multilanguage} from "redux-multilanguage";

const Contact = ({ location,strings }) => {
  const { pathname } = location;


  const [name, nameHandler ] = useState("")
  const [email, emailHandler ] = useState("")
  const [subject, subjectHandler ] = useState("")
  const [message, messageHandler ] = useState("")
  const [loading, setLoading] = useState(false)
  const [error1, setError1] = useState('')
  const [success, setSuccess] = useState('')


  const submitForm = () =>{
    if (!email || !subject ||!message || !name) {
      setError1(strings['lr_all_fields_obligatory'])
      return
    }
    setLoading(true)
      axios.post(`${routes.server}/contact`, {name:name,email:email,subject:subject,message:message  })
      .then(response=>{
        nameHandler("");
        emailHandler("");
        subjectHandler("");
        messageHandler("");
        console.log(response);
        setSuccess(strings['contactSection']['got_your_feedback'])
        setTimeout(function () {
          setSuccess('')
        },1500)
      }).catch(err=>{
        console.log(err)
        setError1(strings['subs_connection_error'])
      }).finally(() => {
        setLoading(false)
      })
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Wendyfy | Contact</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings['home']}</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {strings['contact']}
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="3.8399833" longitude="11.4798095" />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+237 679 591 937</p>
                      <p>+237 242 016 011</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:contact@wendyfy.com">contact@wendyfy.com</a>
                      </p>
                      <p>
                        <a href="/">wendyfy.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Yaounde Acassia</p>
                      <p>descente Biyemassi Lac</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>{strings['contactSection']['follow_us']}</h3>
                    <ul>
                      <li>
                        <a target="_blank" href="https://www.facebook.com/wendybyfy" rel="noopener noreferrer">
                          <i className="fa fa-facebook"  />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/wendyfy_237/" rel="noopener noreferrer">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>{strings['contactSection']['get_in_touch']}</h2>
                  </div>
                  <form onSubmit={e=>{
                    e.preventDefault();
                    submitForm()

                  }} className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name"
                        placeholder={`${strings['contactSection']['name_e']}*`}
                        value ={name || ""}
                        onChange={ e=> nameHandler(e.target.value)}
                        type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder={`${strings['contactSection']['email_e']}*`}
                          value = {email || ""}
                         onChange={ e=> emailHandler(e.target.value)}
                        type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder={`${strings['contactSection']['subject']}*`}
                          value ={subject}
                          onChange={ e=> subjectHandler(e.target.value)}
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder={`${strings['contactSection']['your_message']}*`}
                          value = {message}
                          onChange={ e=> messageHandler(e.target.value)}
                        />
                        {error1 && <p style={{color: "red"}}>{error1}</p>}
                        {success && <p style={{color: "green"}}>{success}</p>}
                        <button className="submit" type="submit" disabled={loading}>
                            {loading ? <Loader
                                type="Oval"
                                color="white"
                                height={20}
                                width={20}
                            /> : <span>{strings['lr_send']}</span>}
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object,
  strings:PropTypes.object
};

export default multilanguage(Contact);
