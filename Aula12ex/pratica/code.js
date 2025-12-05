function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = window.document.querySelector('input#txtano')
    var resultado = window.document.querySelector('div#resultado')
    if(nascimento.value.length == 0 || Number(nascimento.value) > ano){
        window.alert('Erro! Dados invalidos, tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
    }
}