import axios from 'axios';
import { routes } from "../../config/routes";

import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";

export const SLIDER_FETCH = "SLIDER_FETCH";
export const SLIDER_FETCH_SUCCESS = "SLIDER_FETCH_SUCCESS";


export const fetchSlider = ( ) => {
    return dispatch => {
        axios.get(`${routes.server}/slider`)
        .then(response=>{
        fetchSliderSuccess()
      return dispatch({
        type: SLIDER_FETCH,
        payload: [...response.data]
      })
      }
    ).catch(err=>{
      return dispatch({
        type: SLIDER_FETCH,
        payload: heroSliderData
      })
    });
    };
  };

export const fetchSliderSuccess = ( ) => {
    return dispatch => {
            dispatch({type: SLIDER_FETCH_SUCCESS})
    };
  };
