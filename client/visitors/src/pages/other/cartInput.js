import React from 'react'

const input = ()=>{
    return(
        <>
            <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20">
                    <label>Numéro de compte</label>
                    <input type="text" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20">
                    <label>Date d'expiration</label>
                    <input type="text" />
                </div>
            </div>
        </>
    )   
}

export default input;