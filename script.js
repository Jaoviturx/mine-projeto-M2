const form = document.getElementById("form-cadastro");
const listafilmes = document.getElementById("lista-filmes");

// Array para armazenar os filmes
let filmes = [];

// Função para adicionar filme
function adicionarfilme(event) {
  event.preventDefault();

  // Pega os valores dos campos
  const titulo = document.getElementById("titulo").value.trim();
  const ano = document.getElementById("ano").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const descricao = document.getElementById("descriçao").value.trim();

  // Classe Filme
  class Filme {
    constructor(titulo, ano, genero, descricao) {
      this.titulo = titulo;
      this.ano = ano;
      this.genero = genero;
      this.descricao = descricao;
    }
  }

  // Verifica se algum campo está vazio
  if (!titulo || !ano || !genero || !descricao) {
    alert("Por favor, preencha todos os campos antes de adicionar.");
    return;
  }

  // Cria um novo objeto Filme
  const filme = new Filme(titulo, ano, genero, descricao);

  // Adiciona o filme ao array
  filmes.push(filme);

  // Cria um novo item de lista
  const li = document.createElement("li");

  // Usa template string corretamente (com crase)
  li.innerHTML = `
    <h3>${filme.titulo} (${filme.ano})</h3>
    <p><strong>Gênero:</strong> ${filme.genero}</p>
    <p><strong>Descrição:</strong> ${filme.descricao}</p>
    <button class="editar">Editar</button>
    <button class="deletar">Deletar</button>
  `;

  // Adiciona o item na lista
  listafilmes.appendChild(li);

  // Evento para deletar
  li.querySelector(".deletar").addEventListener("click", () => {
    // Remove o filme do array
    filmes = filmes.filter(f => f !== filme);

    // Remove o item da lista
    listafilmes.removeChild(li);
  });

  // Evento para editar
  li.querySelector(".editar").addEventListener("click", () => {
    document.getElementById("titulo").value = filme.titulo;
    document.getElementById("ano").value = filme.ano;
    document.getElementById("genero").value = filme.genero;
    document.getElementById("descriçao").value = filme.descricao;

    // Remove o filme do array
    filmes = filmes.filter(f => f !== filme);

    // Remove o item da lista
    listafilmes.removeChild(li);
  });

  // Limpa o formulário após adicionar
  form.reset();
}

// Adiciona o evento de envio ao formulário
form.addEventListener("submit", adicionarfilme);
