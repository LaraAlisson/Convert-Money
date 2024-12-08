const button = document.getElementById('convert-button');
const select = document.getElementById('select-currency');

const dolar = 5;
const euro = 6;

//função para tratamento de real para dolar.
const convertValue = () => {
    const inputReais = document.getElementById('input-reais').value;
    const displayReais = document.getElementById('display-reais');
    const displayDolar = document.getElementById('display-dolar');
    const dolarConvert = inputReais / dolar;
    const euroConvert = inputReais / euro;

    displayReais.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);

    if (select.value === 'US$ Dólar americano') {
        displayDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(dolarConvert);
    }else{
        displayDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(euroConvert);
    }


}

//função para captura o select currency

const selectCurrency = () => {
   
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.getElementById('currency-img');

    if(select.value === 'US$ Dólar americano'){

        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src="../images/estados-unidos.png"
        
    }else{
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "../images/euro.png"
    }

    convertValue();
}

//Função que verefica o estatos do button e do select
button.addEventListener('click', convertValue);
select.addEventListener('change',selectCurrency )


