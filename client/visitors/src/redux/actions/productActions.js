import axios from 'axios';
import {routes} from '../../config/routes';
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const COMMENT_PRODUCTS_SUCCESS = "COMMENT_PRODUCTS_SUCCESS";
export const RATE_PRODUCTS_SUCCESS = "RATE_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

// fetch products
export const fetchProducts = products => {
  return dispatch => {
    axios.get(routes.server)
    .then(res=>{
      const productsFetched = res.data
      dispatch(fetchProductsSuccess(productsFetched));
    })
    .catch(err=>{
      const errMsg = err.message;
      console.log(errMsg);
    })

    
  };
};
export const commentProducts = (
  productId,
  name,
  email,
  comment,before=null,after=null
) => {
  return dispatch => {
    if(before){
      before()
    }
    axios.post(`${routes.server}/comments/${productId}`,{name:name, email: email, comment: comment})
    .then(newComment=>{
      console.log("we get here")
      return dispatch({
        type: COMMENT_PRODUCTS_SUCCESS,
        payload:{productId:productId,
         comment: newComment.data
        },
      });
    
    })
    .catch(err=>{
      console.log(err)
    }).finally(()=>{
      if(after){
        after()
      }
    });
    
  };




  
 
};
export const rateProducts = products => {
  return dispatch => {
    axios.get(routes.server)
    .then(res=>{
      const productsFetched = res.data
      dispatch(fetchProductsSuccess(productsFetched));
    })
    .catch(err=>{
      const errMsg = err.message;
      console.log(errMsg);
    })

    
  };
};
