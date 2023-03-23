function verificarNota() {
    let nota = parseInt(document.getElementById("nota").value);

    if (isNaN(nota)) {
        alert("Introduce un número de 0 a 10");
    } else if (nota >= 0 && nota <= 2) {
        alert("Muy deficiente");
    } else if (nota >= 3 && nota <= 4) {
        alert("Insuficiente");
    } else if (nota >= 5 && nota <= 6) {
        alert("Suficiente");
    } else if (nota == 7) {
        alert("Bien");
    } else if (nota >= 8 && nota <= 9) {
        alert("Notable");
    } else if (nota == 10) {
        alert("Sobresaliente");
    } else {
        alert("Número erróneo");
    }
}