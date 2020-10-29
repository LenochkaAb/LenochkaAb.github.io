let usdBuy = 33.15;
let usdSale = 28.49
document.getElementById('usdBuy').innerText = usdBuy;
document.getElementById('usdSale').innerText = usdSale;

let euroBuy = 28.10;
let euroSale = 33.65;
document.getElementById('euroBuy').innerText = euroBuy.toFixed(2);
document.getElementById('euroSale').innerText = euroSale;

let rubBuy = 0.357;
let rubSale = 0.386;
document.getElementById('rubBuy').innerText = rubBuy;
document.getElementById('rubSale').innerText = rubSale;



btnBuy.onclick = () => {
    const n = document.getElementById('mySelect').options.selectedIndex;
    const sel = document.getElementById('mySelect').options[n].text;
    const val = document.getElementById('input-value').value;
    resultBuy(sel, val);
}
resultBuy = (sel, val) => {
    let result;
    switch (sel) {
        case "USD":
            result = (val * usdBuy).toFixed(2);
            break;
        case "EURO":
            result = (val * euroBuy).toFixed(2);
            break;
        case "RUB":
            result = (val * rubBuy).toFixed(2);
            break;
    }
    document.getElementById('result').innerHTML = `Ваша сумма: ${result} грн`;
}
btnSale.onclick = () => {
    const n = document.getElementById('mySelect').options.selectedIndex;
    const sel = document.getElementById('mySelect').options[n].text;
    const val = document.getElementById('input-value').value;
    resultSale(sel, val);
}
resultSale = (sel, val) => {
    let result;
    switch (sel) {
        case "USD":
            result = (val * usdSale).toFixed(2);
            break;
        case "EURO":
            result = (val * euroSale).toFixed(2);
            break;
        case "RUB":
            result = (val * rubSale).toFixed(2);
            break;
    }
    document.getElementById('result').innerHTML = `Ваша сумма: ${result} грн`;
}
