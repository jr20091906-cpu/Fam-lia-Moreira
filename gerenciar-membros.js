// Família Moreira
// Gerenciar Membros v2.0

const lista = document.getElementById("listaMembros");
const botaoNovo = document.getElementById("novoMembro");

botaoNovo.addEventListener("click", () => {

    localStorage.removeItem("editarMembro");
    localStorage.removeItem("indiceMembro");

    window.location.href = "novo-membro.html";

});

function carregarMembros() {

    let membros =
        JSON.parse(localStorage.getItem("membros")) || [];

    membros.sort((a, b) =>
        (a.nome || "").localeCompare(b.nome || "", "pt-BR")
    );

    lista.innerHTML = "";

    if (membros.length === 0) {

        lista.innerHTML = `
            <div class="card">
                <h2>Nenhum membro cadastrado</h2>
                <p>Cadastre o primeiro membro da família.</p>
            </div>
        `;

        return;
    }

    membros.forEach((membro) => {

        lista.innerHTML += `

        <div class="card">

            <div class="membro">

                <div class="foto">

                    ${
                        membro.foto
                        ? `<img src="${membro.foto}">`
                        : "👤"
                    }

                </div>

                <div class="info">

                    <h2>${membro.nome}</h2>

                    <p>👤 ${membro.usuario}</p>

                    <p>👑 ${membro.perfil}</p>

                    <p>📞 ${membro.telefone || "-"}</p>

                </div>

            </div>

            <div class="acoes">

                <button onclick="editar('${membro.id}')">

                    ✏️ Editar

                </button>

                <button onclick="excluir('${membro.id}')">

                    🗑️ Excluir

                </button>

            </div>

        </div>

        `;

    });

}

function editar(id) {

    let membros =
        JSON.parse(localStorage.getItem("membros")) || [];

    const indice =
        membros.findIndex(m => m.id == id);

    if (indice === -1) return;

    localStorage.setItem(
        "editarMembro",
        JSON.stringify(membros[indice])
    );

    localStorage.setItem(
        "indiceMembro",
        indice
    );

    window.location.href = "novo-membro.html";

}

function excluir(id) {

    if (!confirm("Deseja excluir este membro?"))
        return;

    let membros =
        JSON.parse(localStorage.getItem("membros")) || [];

    membros =
        membros.filter(m => m.id != id);

    localStorage.setItem(
        "membros",
        JSON.stringify(membros)
    );

    carregarMembros();

}

carregarMembros();
