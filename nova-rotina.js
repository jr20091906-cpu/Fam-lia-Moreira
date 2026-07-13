// Família Moreira
// Nova Rotina v2.0

const formulario = document.getElementById("formRotina");

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
// Salvar rotina
// ===============================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let rotinas =
    JSON.parse(localStorage.getItem("rotinas")) || [];

    const agora = new Date().toISOString();

    const rotina = {

        id: "rot_" + Date.now(),

        titulo:
        document.getElementById("titulo").value.trim(),

        responsavel:
        document.getElementById("responsavel").value,

        frequencia:
        document.getElementById("frequencia").value,

        observacoes:
        document.getElementById("observacoes").value.trim(),

        criadoEm:
        agora,

        atualizadoEm:
        agora

    };

    rotinas.push(rotina);

    localStorage.setItem(
        "rotinas",
        JSON.stringify(rotinas)
    );

    alert("✅ Rotina salva com sucesso!");

    window.location.href = "
