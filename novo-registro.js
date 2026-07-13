// Família Moreira
// Novo Registro Escola v2.0

const formulario = document.getElementById("formRegistro");

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
// Salvar registro
// ===============================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let registros =
    JSON.parse(localStorage.getItem("registrosEscola")) || [];

    const agora = new Date().toISOString();

    const registro = {

        id: "esc_" + Date.now(),

        titulo:
        document.getElementById("titulo").value.trim(),

        responsavel:
        document.getElementById("responsavel").value,

        disciplina:
        document.getElementById("disciplina").value.trim(),

        data:
        document.getElementById("data").value,

        status:
        document.getElementById("status").value,

        observacoes:
        document.getElementById("observacoes").value.trim(),

        criadoEm:
        agora
