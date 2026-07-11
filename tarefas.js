// Família Moreira
// Tarefas v1.0

const lista = document.getElementById("listaTarefas");
const pesquisa = document.getElementById("pesquisa");
const filtro = document.getElementById("filtro");
const botao = document.getElementById("novaTarefa");

botao.addEventListener("click", () => {
    window.location.href = "nova-tarefa.html";
});

function carregarTarefas() {

    const tarefas =
        JSON.parse(localStorage.getItem("tarefas")) || [];

    lista.innerHTML = "";

    const texto = pesquisa.value.toLowerCase();

    const resultado = tarefas.filter((tarefa) => {

        const pesquisaOK =
            tarefa.titulo.toLowerCase().includes(texto);

        const filtroOK =
            filtro.value === "todos" ||
            tarefa.responsavel === filtro.value ||
            tarefa.responsavel === "todos";

        return pesquisaOK && filtroOK;

    });

    if (resultado.length === 0) {

        lista.innerHTML = `
        <div class="card">
            <h2>Nenhuma tarefa encontrada</h2>
            <p>Cadastre uma nova tarefa.</p>
        </div>
        `;

        return;
    }

    resultado.forEach((tarefa) => {

        lista.innerHTML += `
        <div class="card">

            <h2>${tarefa.titulo}</h2>

            <p>👤 Responsável: ${tarefa.responsavel}</p>

            <p>📅 Prazo: ${tarefa.data}</p>

            <p>⚠️ Prioridade: ${tarefa.prioridade}</p>

            <p>📌 Status: ${tarefa.status}</p>

        </div>
        `;
    });

}

pesquisa.addEventListener("input", carregarTarefas);

filtro.addEventListener("change", carregarTarefas);

carregarTarefas();
