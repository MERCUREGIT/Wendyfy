import { FETCH_PRODUCTS_SUCCESS, COMMENT_PRODUCTS_SUCCESS } from "../actions/productActions";

const initState = {
  products: []
};

const productReducer = (state = initState, action) => {
  let payload = action.payload;

  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload
    };
  }

  if (action.type === COMMENT_PRODUCTS_SUCCESS) {

    let productIndex = state.products.findIndex(element=>{
      return element._id === payload.productId
    });

     state.products[productIndex].comments.push(payload.comment);
    console.log("new state product index obejct",state.products[productIndex])
    return {
      ...state
    };
  }

  return state;
};

export default productReducer;
