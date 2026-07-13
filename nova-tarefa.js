// Família Moreira
// Nova Tarefa v2.0

const formulario = document.getElementById("formTarefa");

const selectResponsavel =
document.getElementById("responsavel");


// ===============================
// Carregar membros
// ===============================

function carregarMembros(){

    if(!selectResponsavel) return;

    const membros =
    JSON.parse(localStorage.getItem("membros")) || [];

    selectResponsavel.innerHTML = "";

    selectResponsavel.innerHTML += `
        <option value="todos">
            👨‍👩‍👧‍👦 Todos
        </option>
    `;

    membros
    .sort((a,b)=>
        a.nome.localeCompare(b.nome,"pt-BR")
    )
    .forEach((membro)=>{

        selectResponsavel.innerHTML += `

            <option value="${membro.nome}">

                ${membro.nome}

            </option>

        `;

    });

}

carregarMembros();


// ===============================
// Salvar tarefa
// ===============================

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let tarefas =
        JSON.parse(localStorage.getItem("tarefas")) || [];

    const agora = new Date().toISOString();

    const tarefa = {

        id: "tar_" + Date.now(),

        titulo:
            document.getElementById("titulo").value.trim(),

        responsavel:
            document.getElementById("responsavel").value,

        data:
            document.getElementById("data").value,

        prioridade:
            document.getElementById("prioridade").value,

        status:
            document.getElementById("status").value,

        observacoes:
            document.getElementById("observacoes").value.trim(),

        criadoEm: agora,

        atualizadoEm: agora

    };

    tarefas.push(tarefa);

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );

    alert("✅ Tarefa salva com sucesso!");

    window.location.href = "tarefas.html";

});
