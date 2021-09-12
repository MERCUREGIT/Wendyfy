import axios from "axios";
export const SET_CURRENCY = "SET_CURRENCY";

export const setCurrency = currencyName => {
  return dispatch => {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=USD?access_key=6b38a7c13556549061be53caab453fa8`)
      .then(response => {
        console.log(response)
        const rates = response.data.rates;
        let currencyRate = 0;
        for (const rate in rates) {
          if (rate === currencyName) {
            currencyRate = rates[rate];
          }
        else {
              currencyRate = 561.823
          }
        }
        dispatch({
          type: SET_CURRENCY,
          payload: { currencyName, currencyRate:currencyRate?currencyRate:1 }
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
};
