const form = document.getElementById("form-cadastro");
const listafilmes = document.getElementById("lista-filmes");

// Função de adicionar filmes
function adicionarfilme(event) {
    event.preventDefault();

    // Pega os valores
    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const genero = document.getElementById("genero").value;
    const descriçao = document.getElementById("descriçao").value;

    // Cria item da lista
    const li = document.createElement("li");
    li.innerHTML = `<h3>${titulo} (${ano})</h3><p><strong>Gênero:</strong> ${genero}</p><p><strong>Descrição:</strong> ${descriçao}</p> 
    <button id="editar">editar</button>
        <button id="deletar">deletar</button>`;

    // Adiciona o item na lista
    listafilmes.appendChild(li);

    // Limpa os campos do formulário após adicionar
    form.reset();
}
//adiciona o evento de submit no formulario 
form.addEventListener("submit", adicionarfilme);


