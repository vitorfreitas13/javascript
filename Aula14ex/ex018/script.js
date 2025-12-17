function tabuada() {
    let numero = document.querySelector('#num');
    let resultado = document.querySelector('#seltab');

    if (numero.value.length == 0) {
        window.alert('Por favor digite um número!');
        return;
    }

    let n = Number(numero.value);
    resultado.innerHTML = ''; // limpa lista antes de preencher

    let c = 1;
    while (c <= 10) {
        let item = document.createElement('li');
        item.textContent = `${n} x ${c} = ${n * c}`;
        item.style.padding = "4px 0";  // deixa mais espaçado
        resultado.appendChild(item);
        c++;
    }
}
