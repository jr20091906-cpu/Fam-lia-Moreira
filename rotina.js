// Família Moreira
// Rotina da Casa v1.0

const lista = document.getElementById("listaRotinas");
const botao = document.getElementById("novaRotina");

botao.addEventListener("click", () => {

    window.location.href = "nova-rotina.html";

});

function carregarRotinas(){

    const rotinas =
    JSON.parse(localStorage.getItem("rotinas")) || [];

    lista.innerHTML = "";

    if(rotinas.length === 0){

        lista.innerHTML = `

        <div class="card">

            <h2>Nenhuma rotina cadastrada</h2>

            <p>Clique em "➕ Nova Rotina" para começar.</p>

        </div>

        `;

        return;

    }

    rotinas.forEach((rotina,index)=>{

        lista.innerHTML += `

        <div class="card">

            <h2>${rotina.titulo}</h2>

            <p>👤 Responsável: ${rotina.responsavel}</p>

            <p>📅 Frequência: ${rotina.frequencia}</p>

            <p>📝 ${rotina.observacoes || "-"}</p>

            <button onclick="excluirRotina(${index})">

                🗑️ Excluir

            </button>

        </div>

        `;

    });

}

function excluirRotina(index){

    let rotinas =
    JSON.parse(localStorage.getItem("rotinas")) || [];

    if(confirm("Deseja excluir esta rotina?")){

        rotinas.splice(index,1);

        localStorage.setItem(
            "rotinas",
            JSON.stringify(rotinas)
        );

        carregarRotinas();

    }

}

carregarRotinas();
