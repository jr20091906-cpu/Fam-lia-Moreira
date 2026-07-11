// Família Moreira
// Tarefas v2.0

const lista = document.getElementById("listaTarefas");
const pesquisa = document.getElementById("pesquisa");
const filtro = document.getElementById("filtro");
const botao = document.getElementById("novaTarefa");

botao.addEventListener("click", () => {
    window.location.href = "nova-tarefa.html";
});

function formatarData(data){

    if(!data) return "-";

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}

function nomeResponsavel(codigo){

    switch(codigo){

        case "laercio":
            return "👑 Laércio";

        case "taina":
            return "🌸 Tainá";

        case "anaclara":
            return "💜 Ana Clara";

        case "isadora":
            return "💚 Isadora";

        case "isaac":
            return "🧸 Isaac";

        case "todos":
            return "👨‍👩‍👧‍👦 Toda a família";

        default:
            return codigo;

    }

}

function carregarTarefas(){

    const tarefas =
    JSON.parse(localStorage.getItem("tarefas")) || [];

    lista.innerHTML = "";

    const texto =
    pesquisa.value.toLowerCase();

    const resultado = tarefas.filter((tarefa)=>{

        const pesquisaOK =
        tarefa.titulo.toLowerCase().includes(texto);

        const filtroOK =
        filtro.value === "todos" ||
        tarefa.responsavel === filtro.value ||
        tarefa.responsavel === "todos";

        return pesquisaOK && filtroOK;

    });

    if(resultado.length === 0){

        lista.innerHTML = `

        <div class="card">

            <h2>Nenhuma tarefa encontrada</h2>

            <p>Cadastre uma nova tarefa.</p>

        </div>

        `;

        return;

    }

    resultado.forEach((tarefa,index)=>{

        lista.innerHTML += `

        <div class="card">

            <h2>${tarefa.titulo}</h2>

            <p>👤 ${nomeResponsavel(tarefa.responsavel)}</p>

            <p>📅 ${formatarData(tarefa.data)}</p>

            <p>⚠️ Prioridade: ${tarefa.prioridade}</p>

            <p>📌 Status: ${tarefa.status}</p>

            <p>📝 ${tarefa.observacoes || "-"}</p>

            <div class="acoes-card">

                <button onclick="concluirTarefa(${index})">

                ✅ Concluir

                </button>

                <button onclick="excluirTarefa(${index})">

                🗑️ Excluir

                </button>

            </div>

        </div>

        `;

    });

}

function concluirTarefa(index){

    let tarefas =
    JSON.parse(localStorage.getItem("tarefas")) || [];

    tarefas[index].status = "Concluída";

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );

    carregarTarefas();

}

function excluirTarefa(index){

    let tarefas =
    JSON.parse(localStorage.getItem("tarefas")) || [];

    if(confirm("Deseja excluir esta tarefa?")){

        tarefas.splice(index,1);

        localStorage.setItem(
            "tarefas",
            JSON.stringify(tarefas)
        );

        carregarTarefas();

    }

}

pesquisa.addEventListener(
    "input",
    carregarTarefas
);

filtro.addEventListener(
    "change",
    carregarTarefas
);

carregarTarefas();
