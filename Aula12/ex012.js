var idade = 70
console.log(`Sua idade é ${idade} anos.`)
if (idade >= 18 && idade <= 65){
    console.log('Voto obrigatório!')
} else if (idade < 16){
    console.log('Não vota!')
} else if (idade > 65){
    console.log('Voto opcional')
}