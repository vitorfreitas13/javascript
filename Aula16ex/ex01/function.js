function adicionar() {
    // 1. Obter o valor do input
    var num = document.querySelector('.number');
    var i = Number(num.value); // converte para número

    // 2. Validação
    if (num.value.trim() === "") {
        window.alert('Você não pode deixar o campo vazio! Adicione um número e tente novamente!');
        return; // interrompe a função se estiver vazio
    } else if (i === 0 || i > 100){
        window.alert('Número Invalido! Tente novamente');
         return; // interrompe a função se o número for 0 ou maior que 100
    } else {
        
    }

    // Se passar na validação, você pode continuar
}
