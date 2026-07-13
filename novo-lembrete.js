// Família Moreira
// Novo Lembrete v2.0

const formulario = document.getElementById("formLembrete");

const selectResponsavel =
document.getElementById("responsavel");


// ===============================
// Carregar membros cadastrados
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
// Salvar lembrete
// ===============================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let lembretes =
    JSON.parse(localStorage.getItem("lembretes")) || [];

    const agora = new Date().toISOString();

    const lembrete = {

        id: "lem_" + Date.now(),

        titulo:
        document.getElementById("titulo").value.trim(),

        responsavel:
        document.getElementById("responsavel").value,

        data:
        document.getElementById("data").value,

        prioridade:
        document.getElementById("prioridade").value,

        observacoes:
        document.getElementById("observacoes").value.trim(),

        criadoEm:
        agora,

        atualizadoEm:
        agora

    };

    lembretes.push(lembrete);

    localStorage.setItem(
        "lembretes",
        JSON.stringify(lembretes)
    );

    alert("✅ Lembrete salvo com sucesso!");

    window.location.href = "lembretes.html";

});
