let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEuro = 4.70;
let rateDolar = 4.38;
let rateFrank = 4.74;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "Euro":
            result = amount / rateEuro;
            break;

        case "Dolar":
            result = amount / rateDolar;
            break;

        case "Frank":
            result = amount / rateFrank;
            break;
    }

    resultElement.innerText = `${amount.toFixed(2)} PLN =${result.toFixed(2)} ${currency}`;

});