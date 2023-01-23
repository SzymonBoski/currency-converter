{
    const calculateResult = (amount, currency) => {
        const rateEuro = 4.70;
        const rateDolar = 4.38;
        const rateFrank = 4.74;

        switch (currency) {
            case "Euro":
                return amount / rateEuro;

            case "Dolar":
                return amount / rateDolar;

            case "Frank":
                return amount / rateFrank;
        }
    };

    const updateResultText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${amount.toFixed(2)} PLN =${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(amount, currency, result);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}