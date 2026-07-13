// Família Moreira
// Novo Compromisso v4.1

const formulario = document.getElementById("formCompromisso");

const indiceEdicao = localStorage.getItem("indiceEdicao");

const compromissoEdicao =
JSON.parse(localStorage.getItem("editarCompromisso"));

const selectMembro =
document.getElementById("membro");


// ===============================
// Carregar membros cadastrados
// ===============================

function carregarMembros() {

    if (!selectMembro) return;

    const membros =
        JSON.parse(localStorage.getItem("membros")) || [];

    selectMembro.innerHTML = "";

    selectMembro.innerHTML += `
        <option value="todos">
            👨‍👩‍👧‍👦 Todos
        </option>
    `;

    membros
        .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
        .forEach((membro) => {

            selectMembro.innerHTML += `
                <option value="${membro.nome}">
                    ${membro.nome}
                </option>
            `;

        });

}

carregarMembros();


// ===============================
// Carregar dados da edição
// ===============================

if (indiceEdicao !== null && compromissoEdicao) {

    document.getElementById("titulo").value =
        compromissoEdicao.titulo || "";

    document.getElementById("membro").value =
        compromissoEdicao.membro || "todos";

    document.getElementById("data").value =
        compromissoEdicao.data || "";

    document.getElementById("hora").value =
        compromissoEdicao.hora || "";

    document.getElementById("local").value =
        compromissoEdicao.local || "";

    document.getElementById("observacoes").value =
        compromissoEdicao.observacoes || "";

}


// ===============================
// Salvar
// ===============================

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let lista =
        JSON.parse(localStorage.getItem("compromissos")) || [];

    const agora = new Date().toISOString();

    const compromisso = {

        id:
            compromissoEdicao?.id ||
            "cmp_" + Date.now(),

        titulo:
            document.getElementById("titulo").value.trim(),

        membro:
            document.getElementById("membro").value,

        data:
            document.getElementById("data").value,

        hora:
            document.getElementById("hora").value,

        local:
            document.getElementById("local").value.trim(),

        observacoes:
            document.getElementById("observacoes").value.trim(),

        status:
            compromissoEdicao?.status || "ativo",

        criadoEm:
            compromissoEdicao?.criadoEm || agora,

        atualizadoEm:
            agora

    };

    if (indiceEdicao !== null) {

        lista[indiceEdicao] = compromisso;

    } else {

        lista.push(compromisso);

    }

    localStorage.setItem(
        "compromissos",
        JSON.stringify(lista)
    );

    localStorage.removeItem("editarCompromisso");
    localStorage.removeItem("indiceEdicao");

    alert("✅ Compromisso salvo com sucesso!");

    window.location.href = "agenda.html";

});
