import PropTypes from "prop-types";
import React,{useState} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import  axios  from  'axios';
import {validateEmail} from "../../../helpers/helpers";
import {routes} from "../../../config/routes";
import {multilanguage} from "redux-multilanguage";

const CustomForm = ({ strings   }) => {
  let [status,setStatus]= useState('')
  let [message,setMessage]= useState('')
  let [email,setEmail]= useState('')
  const submit = () => {
    if(status==='sending'){
      return;
    }
    if(!email){
      setStatus('error');
      setMessage(strings['subs_email'])
      return;
    }
    if(!validateEmail(email)){
      setStatus('error');
      setMessage(strings['subs_invalid_email'])
      return;
    }
    setStatus('sending');
    axios.post(`${routes.server}/news-letter`, {email}).then((data)=>{
      if(data.data.message){
        setStatus('error');
        setMessage(data.data.message)
      }else{
        setStatus('success')
        setMessage(strings['subs_email_added_to_nw'])
        setTimeout(function () {
          setStatus('')
          setMessage('')
        },1500)
      }
      setEmail('');
    }).catch(()=>{
      setStatus('error');
      setMessage(strings['subs_connection_error'])
    })

    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return (
    <div className="subscribe-form">
      <div className="mc-form">
        <div>
          <input
            id="mc-form-email"
            className="email"
            type="email"
            placeholder={strings['subs_enter_your_email']}
            onChange={e=>{setEmail(e.target.value)}}
            value={email}
          />
        </div>
        <div className="clear">
          {status!=='sending'&&<button className="button" onClick={submit}>
            {strings['sub_subscribe']}
          </button>}
        </div>
      </div>

      {status === "sending" && (
        <div style={{ color: "#3498db", fontSize: "12px" }}>{strings['subs_sending']}</div>
      )}
      {status === "error" && (
        <div
          style={{ color: "#e74c3c", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#2ecc71", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const SubscribeEmail = ({ mailchimpUrl,strings }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm strings={strings}
            status={status}
            message={message}
            onValidated={formData =>axios.post('http://localhost:5000/news-letter', {email:formData.EMAIL}) }
          />
        )}
      />
    </div>
  );
};

SubscribeEmail.propTypes = {
  mailchimpUrl: PropTypes.string,
  strings:PropTypes.object
};

export default(multilanguage(SubscribeEmail));
