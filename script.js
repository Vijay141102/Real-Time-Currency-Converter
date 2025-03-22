const api = "https://api.exchangerate-api.com/v4/latest/USD";

document.querySelector(".convert").addEventListener("click", function () {
  let fromCurrency = document.getElementById("sel1").value;
  let toCurrency = document.getElementById("sel2").value;
  let amount = document.getElementById("oamount").value;

  if (fromCurrency === "" || toCurrency === "" || amount === "") {
    alert("Please fill all fields.");
    return;
  }

  let apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let rate = data.rates[toCurrency];
      let convertedAmount = (amount * rate).toFixed(2);
      document.querySelector(
        ".finalValue"
      ).innerText = `${amount} ${currencyNames[fromCurrency]} equals to ${convertedAmount} ${currencyNames[toCurrency]}`;
      document.getElementById("finalAmount").style.display = "block";
    })
    .catch((error) => {
      alert("Error fetching exchange rates. Try again later.");
      console.error("Error:", error);
    });
});

function clearVal() {
  document.getElementById("oamount").value = "";
  document.getElementById("sel1").value = "";
  document.getElementById("sel2").value = "";
  document.getElementById("finalAmount").style.display = "none";
}

const currencyNames = {
  USD: "US Dollar",
  AED: "United Arab Emirates Dirham",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CLP: "Chilean Peso",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CZK: "Czech Koruna",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  EGP: "Egyptian Pound",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  GBP: "British Pound Sterling",
  GTQ: "Guatemalan Quetzal",
  HKD: "Hong Kong Dollar",
  HRK: "Croatian Kuna",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  INR: "Indian Rupee",
  ISK: "Icelandic Króna",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  KZT: "Kazakhstani Tenge",
  MVR: "Maldivian Rufiyaa",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Złoty",
  PYG: "Paraguayan Guarani",
  RON: "Romanian Leu",
  RUB: "Russian Ruble",
  SAR: "Saudi Riyal",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  TWD: "New Taiwan Dollar",
  UAH: "Ukrainian Hryvnia",
  UYU: "Uruguayan Peso",
  ZAR: "South African Rand",
};
