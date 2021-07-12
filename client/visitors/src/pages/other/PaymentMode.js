import React,{useState} from 'react';
import * as Icon from 'react-bootstrap-icons';

function PaymentMode({handlePaymentDetails, paymentDetails,strings}){

    const [paymentMode, setPaymentMode] = useState("")
    
    if(paymentMode ==="")
    {
      return <div className="row" >
              <div className="col-lg-3 col-md-3 m-2" onClick={()=>setPaymentMode("CreditCard")}>
                <Icon.CreditCard2Front size={100}/>
                <h4>{strings['credit_card']}</h4>
              </div>
              <div className="col-lg-3 col-md-3 m-2" onClick={()=>setPaymentMode("Orange")}>
                  <img style={{width:'100px', marginBottom:5, borderRadius:10}} alt="" src={process.env.PUBLIC_URL + '/assets/img/OrangeMoney.png'} />
                  <h4>Orange Money</h4>
              </div>
              <div className="col-lg-3 col-md-3 m-2" onClick={()=>setPaymentMode("MTN")}>
                  <img style={{width:'100px', marginBottom:5}} alt="" src={process.env.PUBLIC_URL + '/assets/img/MtnMobileMoney.png'} />
                  <h4>Mtn Mobile Money</h4>
              </div>
            </div>
    }
    else if(paymentMode==='CreditCard'){
      return  < CreditCardPayment strings={strings} handlePaymentDetails={handlePaymentDetails} paymentDetails={paymentDetails}  unsetPaymentMode={setPaymentMode} />
    }
    else if(paymentMode==='Orange')
    {
      return  < OrangeMoney strings={strings}  handlePaymentDetails={handlePaymentDetails} paymentDetails={paymentDetails} unsetPaymentMode={setPaymentMode} />
    }
    else if(paymentMode==='MTN')
    {
      return  < MtnMoney strings={strings}  handlePaymentDetails={handlePaymentDetails} paymentDetails={paymentDetails}  unsetPaymentMode={setPaymentMode} />
    }

}





function CreditCardPayment({unsetPaymentMode, handlePaymentDetails, paymentDetails, strings}){


  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
     if(name==="number"){
       
     }
     handlePaymentDetails({
       ...paymentDetails,
          [name]: name==="number" ? parseInt(value.replace(/\s/g,''))  :value
       })
       console.log(paymentDetails)
     }
   
    const inputLimiter = (e)=>{
       if(e.target.value.length > e.target.maxLength)
         { e.target.value = e.target.value.slice(0, e.target.maxLength)}
       }
   
   
     return  <>
               <div style={{padding:'20px', width:'20px', position:'relative'}} onClick={()=>unsetPaymentMode('')} >
                           <button  type="button"  className="close"  aria-label="Close">
                           <span aria-hidden="true" >&times;</span>
                           </button>
                       </div>
                       <div id="PaymentForm">
        
                     <input
                       type="text"
                       name="name"
                       placeholder={strings['card_name']}
                       value={paymentDetails.name || ""}
                       onChange={e=>handleInputChange(e)}
                     />
                     <input
                       className=" mt-10"
                       type="text"
                       name="number"
                       value={paymentDetails.number || ""}
                       maxLength="19"
                       onInput={(e)=>{
                         inputLimiter(e)
                       }}
                       onKeyUp={
                         e=>{
                           var val = e.target.value;
                           var newVal = "";
                           val = val.replace(/\s/g,'');
                           for(var i=0; i<val.length; i++){
                             if(i%4===0 & i >0) newVal = newVal.concat(' ');
                             newVal = newVal.concat(val[i]);
                           }
                           e.target.value = newVal;
                         }
                       }
                       placeholder={strings['card_number']}
                       onChange={e=>handleInputChange(e)}
                     />
                   <div className="row mt-10">
                     <div className="col">
                       <input
                           type="number"
                           name="cvc"
                           maxLength="3"
                           onInput={(e)=>{
                             inputLimiter(e)
                           }}
                           placeholder={strings['card_cvc']}
                           value={paymentDetails.cvc || ""}
                           onChange={e=>handleInputChange(e)}
                         />
                     </div>
                     <div className="col"  style={{border: "1px solid #bbbbbbbb"}} >
                       <div className="row">
                       <div className="col">
                         <input 
                         style={{border:"0"}}
                             type="number"
                             name="month"
                             value={paymentDetails.month || ""}
                             placeholder="MM"
                             maxLength="2"
                             onInput={(e)=>{
                               inputLimiter(e)
                             }}
                             onChange={e=>handleInputChange(e)}
                           />
                       </div>
                         <span></span>
                       <div className="col">
                         <input
                         style={{border:"0"}}
                           type="number"
                           name="year"
                           placeholder="YY"
                           size="2"
                           onInput={(e)=>{
                             inputLimiter(e)
                           }}
                           value={paymentDetails.year || ""}
                           maxLength="2"
                           onChange={e=>handleInputChange(e)}
                         />
                       </div>
                       </div>
                     </div>
                   </div>
                 </div>
             </>
           }
   
   function MtnMoney({unsetPaymentMode, handlePaymentDetails, paymentDetails,strings}){
     return <> 
             <div onClick={()=>{
               unsetPaymentMode('')
               handlePaymentDetails({
                 phonenumber:0,
                 channel_name:""
               })
               }} >
                 <button style={{padding:'10px'}} type="button"  className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true" >&times;</span>
                 </button>
             </div>
             <div className="row w-100" >
             <div className="col-lg-3 col-md-3 m-2">
                     <img style={{width:'100px', marginBottom:5}} alt="" src={process.env.PUBLIC_URL + '/assets/img/MtnMobileMoney.png'} />
                 </div>
               <div className="col-lg-6 col-md-6">
                   <div className="billing-info mb-20">
                       <h3>{strings['phone_number']}</h3>
                       <input name='MtnMoney' value={paymentDetails.phonenumber || ''} onChange={e=>handlePaymentDetails({
                           phonenumber:e.target.value,
                           channel_name: "MtnMoney",
                       })} type="tel" />
                   </div>
               </div>
             </div>
           </>
   }
   
   function OrangeMoney({unsetPaymentMode, handlePaymentDetails, paymentDetails,strings}){
     return <> 
   
             <div onClick={()=>{
               unsetPaymentMode('')
               handlePaymentDetails({
                 phonenumber:0,
                 channel_name:""
               })
               }} >
                 <button style={{padding:'10px'}} type="button"  className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true" >&times;</span>
                 </button>
             </div>
             <div className="row w-100" >
               <div className="col-lg-3 col-md-3 m-2">
                     <img style={{width:'100px', marginBottom:5, borderRadius:10}} alt="" src={process.env.PUBLIC_URL + '/assets/img/OrangeMoney.png'} />
               </div>
               <div className="col-lg-6 col-md-6">
                   <div className="billing-info mb-20">
                       <h3>{strings['phone_number']}</h3>
                       <input name='OrangeMoney' value={paymentDetails.phonenumber || ''} onChange={e=>handlePaymentDetails({
                           phonenumber:e.target.value,
                           channel_name: "OrangeMoney",
                       })} type="tel" />
                   </div>
               </div>
             </div>
            
           </>
   }
   

   export default PaymentMode;