let pessoa = {
    nome: "bruna",
    idade: 26,
    dizerOla() {
        console.log("Olá, mondo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()