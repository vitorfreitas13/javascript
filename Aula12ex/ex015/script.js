function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora < 12 && hora > 0){
        img.src = 'fotomanha.png'
        msg.innerHTML = `Agora são ${hora} horas. BOM DIA!`
        document.body.style.background = '#dad74fff'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        msg.innerHTML = `Agora são ${hora} horas. BOA TARDE!`
        document.body.style.background = '#dbcd51ff'
    } else {
        img.src = 'fotonoite.png'
        msg.innerHTML = `Agora são ${hora} horas. BOA NOITE`
        document.body.style.background = '#2b5e6c'
    }

}