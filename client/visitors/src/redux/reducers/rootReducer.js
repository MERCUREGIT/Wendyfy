import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import sliderReducer from "./sliderReducers";
import { combineReducers } from "redux";
import authenticationReducer from './authenticationReducer'
import blogReducer from './blogReducers'
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "fr" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  authentication: authenticationReducer,
  blog:blogReducer,
  slider: sliderReducer
});

export default rootReducer;
