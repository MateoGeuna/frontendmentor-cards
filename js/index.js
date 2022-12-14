// Inputs del formulario
const inputName = document.getElementById("card-name");
const inputNumber = document.getElementById("card-number");
const inputDateExpirationMonth = document.getElementById("date-exp-month");
const inputDateExpirationYear = document.getElementById("date-exp-year");
const inputNumberSecurity = document.getElementById("security-number");
const newMessageError = document.getElementById("message");
const newMessageSuccess = document.getElementById("message");
const successCard = document.getElementById("success-card");

// Elementos de la card donde se muestra lo ingresado por el usuario

const cardName = document.getElementById("mask-card-name");
const placeHolderName = "JANE APPLESEED";
const changeCardName = document.addEventListener("input", function () {
    const newCardName = inputName.value.toUpperCase();
    if (inputName.value === "") {
        cardName.innerText = placeHolderName;
     } else if (validarLetras(newCardName)) {
            cardName.innerText = newCardName;
     } else{
        return
     }
    return;
})

const cardNumber = document.getElementById("mask-card-number");
const placeHolderNumber = "0000 0000 0000 0000";
const changeCardNumber = document.addEventListener("input", function (){
        if (inputNumber.value === "") {
            cardNumber.innerText = placeHolderNumber;
        } else if (validarAllNumbers(inputNumber.value)) {
                const newMaskNumber = maskCreditCardNumber(inputNumber.value)
                cardNumber.innerText = newMaskNumber;     
        } else {
            return
        }
})

const cardExpirationMonth = document.getElementById("mask-card-month");
const placeHolderNumberMonthYear = "00";
const changeCardExpirationMonth = document.addEventListener("input", function () {
    if(inputDateExpirationMonth.value === "") {
        cardExpirationMonth.innerText = placeHolderNumberMonthYear;
    } else if (validarAllNumbers(inputDateExpirationMonth.value)) {
        const newMaskExpirationMonth = inputDateExpirationMonth.value;
        cardExpirationMonth.innerText = newMaskExpirationMonth;
    } else {
        return
    }
})

const cardExpirationYear = document.getElementById("mask-card-year");
const changeCardExpirationYear = document.addEventListener("input", function () {
    if (inputDateExpirationYear.value === "") {
        cardExpirationYear.innerText = placeHolderNumberMonthYear;
    } else if (validarAllNumbers(inputDateExpirationYear.value)) {
        cardExpirationYear.innerText = inputDateExpirationYear.value    
    } else {
        return
    }
})

const cardSecurityNumber = document.getElementById("mask-security-number");
const placeHolderSecurityNumber = "000";
const changeCardSecurityNumber = document.addEventListener("input", function() {
    
    if(inputNumberSecurity.value === "") {
        cardSecurityNumber.innerText = placeHolderSecurityNumber;
    } else if (validarAllNumbers(inputNumberSecurity.value)) {
        const securityNumber = inputNumberSecurity.value;
        cardSecurityNumber.innerText = securityNumber;
    } else {
        return
    }

})





// Boton Confirmar

function confirmCardData() {

    if (inputName.value === "" || inputName.value.length > 35 || !validarLetras(inputName.value)) {

        inputNameUpperCase = inputName.value.toUpperCase();
        showMessaggeError("You must put name and surname");
        return;
    }


    if (inputNumber.value === "" || (inputNumber.value.length != 16) || !validarAllNumbers(inputNumber.value)) {
        showMessaggeError("Your card must contain 16 numbers");
        return;
    }

    if (inputDateExpirationMonth.value === "" || inputDateExpirationMonth.value <= 0
        || inputDateExpirationMonth.value >= 13 || !validarAllNumbers(inputDateExpirationMonth.value) || inputDateExpirationMonth.value.length != 2) {
        showMessaggeError("You must put month between 01 and 12");
        return;
    }

    if (inputDateExpirationYear.value === "" || inputDateExpirationYear.value < 23
        || inputDateExpirationYear.value > 28 || !validarAllNumbers(inputDateExpirationMonth.value) || inputDateExpirationYear.value.length != 2) {
        showMessaggeError("You must put year between 23 and 28");
        return;
    }

    if (inputNumberSecurity.value === "" || !validarAllNumbers(inputNumberSecurity.value)
        || inputNumberSecurity.value.length != 3 || inputNumberSecurity.value < 000
        || inputNumberSecurity.value > 999) {
        showMessaggeError("You must put 3 security digits")
        return;
    }

    /*inputName.value = "";
    inputNumber.value = "";
    inputDateExpirationMonth.value = "";
    inputDateExpirationYear.value = "";
    inputNumberSecurity.value = "";
    showMessageSuccess("Success");*/
    successNewCard();
}


function showMessaggeError(message) {
    newMessageError.innerHTML = `
        <div id="message" class="error">
            <p> ${message}
        </div>
    `;
}

function showMessageSuccess(message) {
    newMessageSuccess.innerHTML = `
        <div id="message" class="success">
            <p> ${message}
        </div>
    `;
}

function validarLetras(valor) {
    //return /^[A-Z]+$/i.test(valor);
    return /^[a-zA-Z????????????????????????]+(?: [a-zA-Z????????????????????????]+)*$/i.test(valor);
}

function validarAllNumbers(valor) {
    return /^\d+$/.test(valor)
}

function maskCreditCardNumber(number) {
    return number.replace(/(\d{4}(?!\s))/g, "$1 ");
}

function successNewCard(message) {
    successCard.innerHTML = `
        <div class="new-card">
            <img class="icon-complete" src="./images/icon-complete.svg" alt="icon-complete">
            <div class="p">
                <p class="first">
                    THANK YOU!
                </p>
                <p class="second"> 
                    We've added your card details
                </p>
            </div>
            <button id="new-submit">Continue</button>
        </div>
    `
}