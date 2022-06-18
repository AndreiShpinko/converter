const CurrencyService = {
  // BASE_RATES_URL: "https://v6.exchangerate-api.com/v6/677efc46a61a5aa79c31f1dc",
  BASE_RATES_URL: "https://v6.exchangerate-api.com/v6/95367980cb1fe26122a0e404",

  BASE_COUNTRIES_URL: "https://restcountries.com/v3.1/currency",

  getRate: function (fromCurrency, toCurrency) {
    return fetch(
      `${this.BASE_RATES_URL}/pair/${fromCurrency}/${toCurrency}`
    ).then((res) => res.json());
  },

  getOptions: function () {
    return fetch(`${this.BASE_RATES_URL}/latest/USD/`).then((res) =>
      res.json()
    );
  },

  getCountries: function (currency) {
    return fetch(`${this.BASE_COUNTRIES_URL}/${currency}`).then((res) =>
      res.json()
    );
  },
};

export default CurrencyService;
