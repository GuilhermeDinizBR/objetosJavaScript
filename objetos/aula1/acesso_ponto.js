const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122334455",
    email:"andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos!`);

console.log(`os tres primeiros digitos do cpf são ${cliente.cpf.substring(0, 3)}`);