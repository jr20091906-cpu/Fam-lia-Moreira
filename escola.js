// Família Moreira
// Escola e Cursos v1.0

const lista = document.getElementById("listaRegistros");
const botao = document.getElementById("novoRegistro");

botao.addEventListener("click", () => {

    window.location.href = "novo-registro.html";

});

function carregarRegistros(){

    const registros =
    JSON.parse(localStorage.getItem("registrosEscola")) || [];

    lista.innerHTML = "";

    if(registros.length === 0){

        lista.innerHTML = `

        <div class="card">

            <h2>Nenhum registro cadastrado</h2>

            <p>Clique em "➕ Novo Registro" para começar.</p>

        </div>

        `;

        return;

    }

    registros.forEach((registro,index)=>{

        lista.innerHTML += `

        <div class="card">

            <h2>${registro.titulo}</h2>

            <p>👤 ${registro.responsavel}</p>

            <p>📚 ${registro.disciplina}</p>

            <p>📅 ${registro.data}</p>

            <p>📌 ${registro.status}</p>

            <p>📝 ${registro.observacoes || "-"}</p>

            <button onclick="excluirRegistro(${index})">

                🗑️ Excluir

            </button>

        </div>

        `;

    });

}

function excluirRegistro(index){

    let registros =
    JSON.parse(localStorage.getItem("registrosEscola")) || [];

    if(confirm("Deseja excluir este registro?")){

        registros.splice(index,1);

        localStorage.setItem(
            "registrosEscola",
            JSON.stringify(registros)
        );

        carregarRegistros();

    }

}

carregarRegistros();
