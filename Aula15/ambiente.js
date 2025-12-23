let num = [4, 6, 9, 8, 7]


num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é, ${num[0]}.`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O numero não foi encontrado!')
} else {
    console.log(`A posição é ${pos} `)
}

