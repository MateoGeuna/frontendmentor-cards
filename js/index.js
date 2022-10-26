// Inputs del formulario
const inputName = document.getElementById("card-name");
const inputNumber = document.getElementById("card-number");
const inputDateExpirationMonth = document.getElementById("date-exp-month");
const inputDateExpirationYear = document.getElementById("date-exp-year");
const inputNumberSecurity = document.getElementById("security-number");

// Elementos de la card donde se muestra lo ingresado por el usuario

function confirmCardData() {
    if (inputName.value === "") {
        showMessaggeError("Debe colocar un nombre y apellido");
        return;
    }


    if (inputNumber.value === "" || (inputNumber.value.length !=16) || !validarAllNumbers(inputNumber.value)) {
        showMessaggeError("Su tarjeta debe contener 16 números");
        return;
    }

    if (inputDateExpirationMonth.value === "" || inputDateExpirationMonth.value <= 0
         || inputDateExpirationMonth.value >= 13 || !validarAllNumbers(inputDateExpirationMonth.value) || inputDateExpirationMonth.value.length != 2) {
        showMessaggeError("Debe colocar un mes del 01 al 12");
        return
    }

    if (inputDateExpirationYear.value === "" || inputDateExpirationYear.value < 22
         || inputDateExpirationYear.value > 26 || !validarAllNumbers(inputDateExpirationMonth.value) || inputDateExpirationYear.value.length != 2) {
        showMessaggeError("Debe colocar un año entre 22 y 26");
        return
    }

    if (inputNumberSecurity.value === "" || !validarAllNumbers(inputNumberSecurity.value) 
        || inputNumberSecurity.value.length != 3 || inputNumberSecurity.value <= 000 
            || inputNumberSecurity.value > 999) {
        showMessaggeError("Debe colocar sus 3 digitos de seguridad")
    }

}

function showMessaggeError(message, type) {
    console.log(message)
}

function validarAllNumbers(valor) {
    return /^\d+$/.test(valor)
}