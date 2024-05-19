const convertBtn = document.querySelector(".convert-btn")
const currencySelect = document.querySelector(".currency-select")/*convert para*/
const currencyConvert = document.querySelector('.currency-money')/*convert de*/


function convertValue() {/*colocar a moeda*/
    const input = document.querySelector('.input-value').value
    const conversion = document.querySelector(".currency-value")
    const conversion1 = document.querySelector(".currency-values")
   

    const valor = {
        Real: 1.00,
        Dolar: 5.20,
        Euro: 6.15,
        Libra: 7.00,
    }
    const valorEmReal = input * valor[currencyConvert.value];
    const valorConvertido = valorEmReal / valor[currencySelect.value];



    if (currencySelect.value == 'Real') {
        conversion.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRl'
        }).format(valorConvertido)
    }


    if (currencySelect.value == "Dolar") {
        conversion.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido)
    }

    if (currencySelect.value == "Euro") {
        conversion.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)
    }

    if (currencySelect.value == "Libra") {
        conversion.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(valorConvertido)
    } else
    
    

    if (currencyConvert.value == 'Real') {
        conversion1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRl'
        }).format(input)
    }


    if (currencyConvert.value == "Dolar") {
        conversion1.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(input)
    }

    if (currencyConvert.value == "Euro") {
        conversion1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(input)
    }

    if (currencyConvert.value == "Libra") {
        conversion1.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(input)
    }

}

function changeConvert() {/*colocar img e text sup*/
    const currancyNames = document.getElementById('currency-firs-name')
    const currancyImgn = document.querySelector("#logo-convert1")



    if (currencyConvert.value == 'Dolar') {
        currancyNames.innerHTML = 'Dolar americano'
        currancyImgn.src = './assets/logoUSA.png'
    }
    if (currencyConvert.value == 'Libra') {
        currancyNames.innerHTML = '£ Libra'
        currancyImgn.src = './assets/libra.png'
    }
    if (currencyConvert.value == 'Euro') {
        currancyNames.innerHTML = 'Euro'
        currancyImgn.src = './assets/Euro.png'
    }
    if (currencyConvert.value == 'Real') {
        currancyNames.innerHTML = 'Real Brasileiro'
        currancyImgn.src = './assets/brasil.png'
    }
    convertValue()
}


function changeCurrancy() {/*colocar img e text inf*/
    const currancyName = document.getElementById('currency-name')
    const currancyImg = document.querySelector("#logo-convert")



    if (currencySelect.value == 'Dolar') {
        currancyName.innerHTML = 'Dolar americano'
        currancyImg.src = './assets/logoUSA.png'
    }
    if (currencySelect.value == 'Libra') {
        currancyName.innerHTML = '£ Libra'
        currancyImg.src = './assets/libra.png'
    }
    if (currencySelect.value == 'Euro') {
        currancyName.innerHTML = 'Euro'
        currancyImg.src = './assets/Euro.png'
    }
    if (currencySelect.value == 'Real') {
        currancyName.innerHTML = 'Real Brasileiro'
        currancyImg.src = './assets/brasil.png'
    }



    convertValue()
}


currencyConvert.addEventListener('change', changeConvert)
currencySelect.addEventListener('change', changeCurrancy)
convertBtn.addEventListener("click", convertValue)