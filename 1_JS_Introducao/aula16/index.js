const idade = prompt("Informe a sua idade:")

if (idade > 18) {
    alert("Você é maior de idade")
} else if (idade > 12){
    alert("Você é menor de idade")
} else if (idade > 4) {
    alert("Você é crinça")
} else {
    alert("..")
}

//Operador ternário = Criar uma estrutura de condição em poucas linhas 

const resultado = (6 === 6) ? "verdadeiro" : "Falso"
console.log(resultado)