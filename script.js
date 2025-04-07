const form = document.getElementById("form-cadastro");
const listafilmes = document.getElementById("lista-filmes");

// Função para adicionar filme
function adicionarfilme(event) {
  event.preventDefault();
}
  // Pega os valores dos campos
  const titulo = document.getElementById("titulo").value.trim();
  const ano = document.getElementById("ano").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const descricao = document.getElementById("descriçao").value.trim();

  // Verifica se algum campo está vazio
  if (!titulo  !ano  !genero || !descricao) {
    alert("Por favor, preencha todos os campos antes de adicionar.");
    return;
  

  // Cria um novo item de lista
  const li = document.createElement("li");

  // Usa template string corretamente (com crase )
  li.innerHTML = `
    <h3>${titulo} (${ano})</h3>
    <p><strong>Gênero:</strong> ${genero}</p>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <button class="editar">Editar</button>
    <button class="deletar">Deletar</button>
`;

  // Adiciona o item na lista
  listafilmes.appendChild(li);

  // Evento para deletar
  li.querySelector(".deletar").addEventListener("click", () => {
    listafilmes.removeChild(li);
  });

  // Evento para editar
  li.querySelector(".editar").addEventListener("click", () => {
    document.getElementById("titulo").value = titulo;
    document.getElementById("ano").value = ano;
    document.getElementById("genero").value = genero;
    document.getElementById("descriçao").value = descricao;

    listafilmes.removeChild(li);
  });

  // Limpa o formulário após adicionar
  form.reset();
}

// Adiciona o evento de envio ao formulário
form.addEventListener("submit", adicionarfilme);