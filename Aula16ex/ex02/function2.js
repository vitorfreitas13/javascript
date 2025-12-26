var display = document.querySelector('.display')
var limpar = document.querySelector('.limpar')
var igual = document.querySelector('.igual')

// Pega cada botão de número e operador pelo querySelectorAll
var botoes = document.querySelectorAll('.btn')

// Variável para guardar a expressão
var expressao = ""

// Função para adicionar valor ao display
function adicionar(valor) {
    if (display.value == "0") {
        display.value = valor
        expressao = valor
    } else {
        display.value += valor
        expressao += valor
    }
}

// Botão limpar
limpar.onclick = function() {
    display.value = "0"
    expressao = ""
}

// Botão igual
igual.onclick = function() {
    display.value = eval(expressao)  // apenas para aprendizado
    expressao = display.value
}

// Para cada botão de número ou operador
for (var i = 0; i < botoes.length; i++) {
    var botao = botoes[i]
    
    // Evita que o botão de limpar ou igual seja adicionado aqui
    if (botao == limpar || botao == igual) {
        continue
    }

    botao.onclick = function() {
        adicionar(this.innerText)
    }
}
