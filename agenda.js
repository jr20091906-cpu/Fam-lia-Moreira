// Família Moreira
// Agenda v2.0

const lista = document.getElementById("listaCompromissos");
const pesquisa = document.getElementById("pesquisa");
const filtro = document.getElementById("filtro");
const botao = document.getElementById("novoCompromisso");

botao.addEventListener("click", () => {

    window.location.href = "novo-compromisso.html";

});

function carregarCompromissos() {

    const compromissos =
        JSON.parse(localStorage.getItem("compromissos")) || [];

    lista.innerHTML = "";

    let resultado = compromissos.filter(compromisso => {

        const texto = pesquisa.value.toLowerCase();

        const pesquisaOK =
            compromisso.titulo.toLowerCase().includes(texto);

        const filtroOK =
            filtro.value === "todos" ||
            compromisso.membro === filtro.value ||
            compromisso.membro === "todos";

        return pesquisaOK && filtroOK;

    });

    if (resultado.length === 0) {

        lista.innerHTML = `
        <div class="card">
            <h2>Nenhum compromisso encontrado</h2>
            <p>Cadastre um novo compromisso.</p>
        </div>
        `;

        return;

    }

    resultado.sort((a, b) => {

        const dataA = new Date(a.data + "T" + a.hora);
        const dataB = new Date(b.data + "T" + b.hora);

        return dataA - dataB;

    });

    resultado.forEach(compromisso => {

        lista.innerHTML += `

        <div class="card">

            <h2>${compromisso.titulo}</h2>

            <p><strong>👤 Membro:</strong> ${compromisso.membro}</p>

            <p><strong>📅 Data:</strong> ${compromisso.data}</p>

            <p><strong>🕒 Horário:</strong> ${compromisso.hora}</p>

            <p><strong>📍 Local:</strong> ${compromisso.local || "-"}</p>

            <p><strong>📝 Observações:</strong> ${compromisso.observacoes || "-"}</p>

        </div>

        `;

    });

}

pesquisa.addEventListener("input", carregarCompromissos);

filtro.addEventListener("change", carregarCompromissos);

carregarCompromissos();
