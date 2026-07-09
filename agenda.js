// Família Moreira
// Agenda v3.0

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



function carregarCompromissos(){

    const compromissos =
    JSON.parse(localStorage.getItem("compromissos")) || [];


    lista.innerHTML = "";


    let resultado = compromissos.filter((compromisso)=>{


        const texto =
        pesquisa.value.toLowerCase();


        const pesquisaOK =
        compromisso.titulo
        .toLowerCase()
        .includes(texto);



        const filtroOK =
        filtro.value === "todos" ||
        compromisso.membro === filtro.value ||
        compromisso.membro === "todos";


        return pesquisaOK && filtroOK;


    });



    if(resultado.length === 0){

        lista.innerHTML = `

        <div class="card">

        <h2>Nenhum compromisso encontrado</h2>

        <p>Cadastre um novo compromisso.</p>

        </div>

        `;

        return;

    }



    resultado.forEach((compromisso,index)=>{


        lista.innerHTML += `

        <div class="card">


        <h2>${compromisso.titulo}</h2>


        <p>👤 ${compromisso.membro}</p>


        <p>📅 ${formatarData(compromisso.data)}</p>


        <p>🕒 ${compromisso.hora}</p>


        <p>📍 ${compromisso.local || "-"}</p>


        <p>📝 ${compromisso.observacoes || "-"}</p>



        <div class="acoes-card">


        <button onclick="editarCompromisso(${index})">

        ✏️ Editar

        </button>


        <button onclick="excluirCompromisso(${index})">

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



pesquisa.addEventListener(
"input",
carregarCompromissos
);


filtro.addEventListener(
"change",
carregarCompromissos
);



carregarCompromissos();
