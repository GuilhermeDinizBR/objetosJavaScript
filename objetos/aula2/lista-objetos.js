const cliente = {
    nome:"João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155446633", "114444444"],
};

cliente.enderecos = [{
    rua: "Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

cliente.enderecos.push({
    rua: "Rua jose tiros",
    numero: 404,
    apartamento: false,
});

listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true);


console.log(listaApenasApartamentos);