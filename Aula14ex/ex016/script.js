function verificar() {
    var inicioInput = document.querySelector('#inicio');
    var fimInput = document.querySelector('#fim');
    var passoInput = document.querySelector('#passo');
    var res = document.querySelector('.resultado'); // Referência à área de resultado

    // 1. Obter os Valores e convertê-los para número
    var i = Number(inicioInput.value);
    var f = Number(fimInput.value);
    var p = Number(passoInput.value);

    // 2. Validação
    if (inicioInput.value.length === 0 || fimInput.value.length === 0 || passoInput.value.length === 0) {
        // Verifica se algum campo está vazio
        res.innerHTML = 'Impossível contar! Verifique os dados.';
        return; // Sai da função
    }

    if (p <= 0) {
        // Garante que o passo não é zero ou negativo
        window.alert('Passo inválido! Considerando PASSO 1.');
        p = 1;
    }

    // Limpa o resultado anterior e começa a contagem
    res.innerHTML = 'Contando: <br>';
    var resultadoContagem = '';
    
    // 3. Realizar o Loop e a Contagem
    if (i < f) {
        // Contagem Crescente
        for (let c = i; c <= f; c += p) {
            resultadoContagem += `${c} 👉 `;
        }
    } else {
        // Contagem Regressiva
        for (let c = i; c >= f; c -= p) {
            resultadoContagem += `${c} 👉 `;
        }
    }

    // 4. Exibir o Resultado
    res.innerHTML += resultadoContagem + '🏁'; 
}