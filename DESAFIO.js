// DESAFIO 2

// QUESTÃO 1 - Média de notas e filtro de aprovados

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const medias = alunos
    .map(aluno => ({nome: aluno.nome, 
    medias: aluno.notas.reduce((soma, nota) => soma + nota, 0)/ aluno.notas.length}))
    .filter(aluno => aluno.medias >= 7)
    .sort((a, b) => b.medias - a.medias);

    console.log(medias);

    // QUESTÃO 2 - Catálogo de filmes com busca e ordenação

    const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  return filmes
    .filter(filme => filme.genero === genero)
    .toSorted((a, b) => {
      if (criterio === "ano") {
        return b[criterio] - a[criterio];
      }
      return a.titulo.localeCompare(b.titulo);
    })
    .map(filme => filme.titulo + " (" + filme.ano + ") - " + filme.genero);
}

console.log(buscarFilmes("fantasia", "ano"));