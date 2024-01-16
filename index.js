const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordLength = 20;

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
}

let passGen = document.getElementById("generator");
let showCode1 = document.getElementById("pass1");
let showCode2 = document.getElementById("pass2");

generator.addEventListener("click", function () {
    let generatepass1 = generateRandomPassword();
    let generatepass2 = generateRandomPassword();
    showCode1.textContent = generatepass1;
    showCode2.textContent = generatepass2;

    console.log("Here is a random password: ", generatepass1 + generatepass2 );
});


pass1.addEventListener("click", function () {
    let elem = document.getElementById('pass1');

    // Crear un elemento de texto temporal
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = elem.textContent;

    // Añadir el elemento al DOM
    document.body.appendChild(tempTextArea);

    // Seleccionar y copiar el texto
    tempTextArea.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(tempTextArea);
});


pass2.addEventListener("click", function () {
    let elem = document.getElementById('pass2');

    // Crear un elemento de texto temporal
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = elem.textContent;

    // Añadir el elemento al DOM
    document.body.appendChild(tempTextArea);

    // Seleccionar y copiar el texto
    tempTextArea.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(tempTextArea);
});
