// Família Moreira
// Lembretes v1.0

const lista = document.getElementById("listaLembretes");
const botao = document.getElementById("novoLembrete");


botao.addEventListener("click", () => {

    window.location.href = "novo-lembrete.html";

});


function formatarData(data){

    if(!data) return "-";

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}



function carregarLembretes(){

    const lembretes =
    JSON.parse(localStorage.getItem("lembretes")) || [];


    lista.innerHTML = "";


    if(lembretes.length === 0){

        lista.innerHTML = `

        <div class="card">

            <h2>Nenhum lembrete cadastrado</h2>

            <p>Clique em "➕ Novo Lembrete".</p>

        </div>

        `;

        return;

    }



    lembretes.forEach((lembrete,index)=>{


        lista.innerHTML += `

        <div class="card">

            <h2>${lembrete.titulo}</h2>

            <p>👤 Para: ${lembrete.responsavel}</p>

            <p>📅 Data: ${formatarData(lembrete.data)}</p>

            <p>⚠️ Prioridade: ${lembrete.prioridade}</p>

            <p>📝 ${lembrete.observacoes || "-"}</p>


            <button onclick="excluirLembrete(${index})">

            🗑️ Excluir

            </button>


        </div>

        `;


    });


}



function excluirLembrete(index){


    let lembretes =
    JSON.parse(localStorage.getItem("lembretes")) || [];


    if(confirm("Deseja excluir este lembrete?")){


        lembretes.splice(index,1);


        localStorage.setItem(
            "lembretes",
            JSON.stringify(lembretes)
        );


        carregarLembretes();


    }


}


carregarLembretes();
