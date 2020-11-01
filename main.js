const usdBuy = 33.15;
const usdSale = 28.49
document.getElementById('usdBuy').innerText = usdBuy;
document.getElementById('usdSale').innerText = usdSale;

const euroBuy = 28.10;
const euroSale = 33.65;
document.getElementById('euroBuy').innerText = euroBuy.toFixed(2);
document.getElementById('euroSale').innerText = euroSale;

const rubBuy = 0.357;
const rubSale = 0.386;
document.getElementById('rubBuy').innerText = rubBuy;
document.getElementById('rubSale').innerText = rubSale;

const mySelect = document.getElementById('mySelect');
const input = document.getElementById('input-value');


mySelect.addEventListener('change', () => {
    input.value = '';

});

btnBuy.addEventListener('click', () => {
    const selectedIndex = mySelect.options.selectedIndex;
    const selectedOption = mySelect.options[selectedIndex].text;
    resultBuy(selectedOption, input.value);
});

btnSale.addEventListener('click', () => {
    const selectedIndex = mySelect.options.selectedIndex;
    const selectedOption = mySelect.options[selectedIndex].text;
    resultSale(selectedOption, input.value);
});

function resultBuy(selectedCurrency, value) {
    let result;
    switch (selectedCurrency) {
        case "USD":
            result = (value * usdBuy).toFixed(2);
            break;
        case "EURO":
            result = (value * euroBuy).toFixed(2);
            break;
        case "RUB":
            result = (value * rubBuy).toFixed(2);
            break;
    }
    setSum(result);
};

function resultSale(selectedCurrency, value) {
    let result;
    switch (selectedCurrency) {
        case "USD":
            result = (value * usdSale).toFixed(2);
            break;
        case "EURO":
            result = (value * euroSale).toFixed(2);
            break;
        case "RUB":
            result = (value * rubSale).toFixed(2);
            break;
    }
    setSum(result);
}

function setSum(result) {
    document.getElementById('result').innerHTML = `Ваша сумма: ${result} грн`;
}