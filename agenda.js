// Família Moreira
// Agenda v4.1

const lista = document.getElementById("listaCompromissos");
const pesquisa = document.getElementById("pesquisa");
const filtro = document.getElementById("filtro");
const botao = document.getElementById("novoCompromisso");

if(botao){

    botao.addEventListener("click", () => {

        window.location.href = "novo-compromisso.html";

    });

}

function formatarData(data){

    if(!data) return "-";

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}

function diasRestantes(data){

    if(!data) return "";

    const hoje = new Date();

    hoje.setHours(0,0,0,0);

    const evento = new Date(data+"T00:00:00");

    const diferenca =
    Math.floor((evento-hoje)/(1000*60*60*24));

    if(diferenca===0) return "🟢 Hoje";

    if(diferenca>0)
        return `⏳ ${diferenca} dia(s)`;

    return `🔴 ${Math.abs(diferenca)} dia(s) atrás`;

}

function carregarCompromissos(){

    let compromissos =
    JSON.parse(localStorage.getItem("compromissos")) || [];

    lista.innerHTML = "";

    const texto =
    pesquisa.value.toLowerCase();

    let resultado =
    compromissos.filter((compromisso)=>{

        const pesquisaOK =
        compromisso.titulo
        .toLowerCase()
        .includes(texto);

        const filtroOK =
        filtro.value==="todos" ||
        compromisso.membro===filtro.value ||
        compromisso.membro==="todos";

        return pesquisaOK && filtroOK;

    });

    resultado.sort((a,b)=>{

        const dataA =
        new Date(a.data+"T"+(a.hora||"00:00"));

        const dataB =
        new Date(b.data+"T"+(b.hora||"00:00"));

        return dataA-dataB;

    });

    if(resultado.length===0){

        lista.innerHTML=`

        <div class="card">

            <h2>Nenhum compromisso encontrado</h2>

            <p>Cadastre um novo compromisso.</p>

        </div>

        `;

        return;

    }

    resultado.forEach((compromisso)=>{

        const indice =
        compromissos.findIndex(
            c => c.id === compromisso.id
        );

        lista.innerHTML += `

        <div class="card">

            <h2>${compromisso.titulo}</h2>

            <p>👤 ${compromisso.membro}</p>

            <p>📅 ${formatarData(compromisso.data)}</p>

            <p>🕒 ${compromisso.hora || "-"}</p>

            <p>📍 ${compromisso.local || "-"}</p>

            <p>📝 ${compromisso.observacoes || "-"}</p>

            <p><strong>${diasRestantes(compromisso.data)}</strong></p>

            <div class="acoes-card">

                <button onclick="editarCompromisso(${indice})">

                    ✏️ Editar

                </button>

                <button onclick="excluirCompromisso(${indice})">

                    🗑️ Excluir

                </button>

            </div>

        </div>

        `;

    });

}

function excluirCompromisso(index){

    let compromissos =
    JSON.parse(localStorage.getItem("compromissos")) || [];

    if(confirm("Deseja excluir este compromisso?")){

        compromissos.splice(index,1);

        localStorage.setItem(
            "compromissos",
            JSON.stringify(compromissos)
        );

        carregarCompromissos();

    }

}

function editarCompromisso(index){

    let compromissos =
    JSON.parse(localStorage.getItem("compromissos")) || [];

    const item = compromissos[index];

    localStorage.setItem(
        "editarCompromisso",
        JSON.stringify(item)
    );

    localStorage.setItem(
        "indiceEdicao",
        index
    );

    window.location.href =
    "novo-compromisso.html";

}

if(pesquisa){

    pesquisa.addEventListener(
        "input",
        carregarCompromissos
    );

}

if(filtro){

    filtro.addEventListener(
        "change",
        carregarCompromissos
    );

}

carregarCompromissos();
