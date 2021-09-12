import React from 'react';
import ProductGrid from "./ProductGrid";

const TopRatedProductsWrapper = ()=>{
    return <div className="container">
      <div className="row mt-5" >
             <div className="col-6">
              <div className="row">
              <ProductGrid
                  category="fashion"
                  type="topRated"
                  limit={12}
                  spaceBottomClass="mb-25"
                /> 
              </div>
            </div>
            <div style={{backgroundImage:"url('http://localhost:5000/uploads/1629907441980-4.jpg')", backgroundSize:"contain"}} className="col-6 p-5 ml-5">
                Top Rated Produtcs
            </div>
        </div> 
    </div>
}

  export default TopRatedProductsWrapper;