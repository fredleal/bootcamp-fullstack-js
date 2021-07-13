const filmes = [
    {
        id: 1,
        titulo: "Forest Gump",
        descricao: "Um filme motivacional",
        duracao: 120
    },
    {
        id: 2,
        titulo: "The Big Lebowsky",
        descricao: "Clasico",
        duracao: 120
    },
    {
        id: 3,
        titulo: "O Hobbit",
        descricao: "Que nem matrix, só presta o primeiro",
        duracao: 120
    },
]

const [{id, titulo, descricao, duracao }] = filmes;

console.log(titulo);

filmes.map(filme => console.log(filme.descricao));