// Família Moreira
// Agenda v4.0

const lista = document.getElementById("listaCompromissos");
const pesquisa = document.getElementById("pesquisa");
const filtro = document.getElementById("filtro");
const botao = document.getElementById("novoCompromisso");

botao.addEventListener("click", () => {
    window.location.href = "novo-compromisso.html";
});

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

        </
