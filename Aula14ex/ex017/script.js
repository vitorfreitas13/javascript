function verificar() {
    var numero = document.querySelector('#numero');
    var resultado = document.querySelector('.res');
    var contador = 1
    var num = Number(numero.value);
    

    resultado.innerHTML = ''; // limpa antes de mostrar

    for (var contador = 1; contador <= 10; contador++) {
        var soma = num * contador
        resultado.innerHTML += `${contador} x ${num} = ${soma}  <br> `;
    }
}
