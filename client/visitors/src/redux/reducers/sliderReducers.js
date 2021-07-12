import {
  SLIDER_FETCH,SLIDER_FETCH_SUCCESS} from "../actions/sliderActions";

const initState = [];

const sliderReducer = (state = initState, action) => {

    const slider = action.payload;

  if (action.type === SLIDER_FETCH) {
   return slider
  }

  if (action.type === SLIDER_FETCH_SUCCESS) {

  }

  return state;
};

export default sliderReducer;