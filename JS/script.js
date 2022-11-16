const digite = document.querySelector(".digite_texto");
const aparece = document.querySelector(".campo_msg");
document.getElementById("aparece_copia").style.display = 'none';

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function cripto() {
    const txtEncriptado = encriptar(digite.value);
    aparece.value = txtEncriptado;
    aparece.style.backgroundImage="none";
    copia_aparece();
}

// let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
// console.table(matrizCodigo);

function encriptar(encriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptado = encriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(encriptado.includes(matrizCodigo[i][0])) {
            encriptado = encriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return encriptado;
}

function descripto() {
    const txtEncriptado = desencriptar(digite.value);
    aparece.value = txtEncriptado;
    aparece.style.backgroundImage = "none";
    copia_aparece();
}

function desencriptar(desencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptado = desencriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(desencriptado.includes(matrizCodigo[i][1])) {
            desencriptado = desencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return desencriptado;
}

function copia() {
    const msg_copia = document.querySelector(".campo_msg");
    msg_copia.select();
    navigator.clipboard.writeText(msg_copia.value);
    msg_copia.value = ""
}

function copia_aparece() {
    document.getElementById("aparece_copia").style.display = 'block';
}