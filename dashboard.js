// Família Moreira
// Dashboard v1.0

const nome =
localStorage.getItem("nome");

const perfil =
localStorage.getItem("perfil");


// ======================
// BOAS VINDAS
// ======================

const boasVindas =
document.getElementById("boasVindas");


if(boasVindas && nome){

    let icone = "";

    if(perfil === "Administrador"){

        icone = " 👑";

    }

    boasVindas.innerHTML =
    "Bem-vindo, " + nome + icone;

}



// ======================
// ÁREA ADMINISTRADOR
// ======================

const adminArea =
document.getElementById("adminArea");


if(adminArea && perfil === "Administrador"){


    adminArea.innerHTML = `

    <a href="admin.html">

        <div class="card">

            <h2>⚙️</h2>

            <h3>Administração</h3>

            <p>Controle do aplicativo</p>

        </div>

    </a>

    `;

}



// ======================
// CONTADORES
// ======================

function quantidade(chave){

    const dados =
    JSON.parse(localStorage.getItem(chave)) || [];

    return Array.isArray(dados)
    ? dados.length
    : 0;

}



const painelResumo =
document.getElementById("painelResumo");


if(painelResumo){


painelResumo.innerHTML = `


<div class="card">

<h2>👨‍👩‍👧‍👦 ${quantidade("membros")}</h2>

<p>Membros</p>

</div>



<div class="card">

<h2>📅 ${quantidade("compromissos")}</h2>

<p>Agenda</p>

</div>



<div class="card">

<h2>✅ ${quantidade("tarefas")}</h2>

<p>Tarefas</p>

</div>



<div class="card">

<h2>🏠 ${quantidade("rotinas")}</h2>

<p>Rotinas</p>

</div>



<div class="card">

<h2>📚 ${quantidade("registrosEscola")}</h2>

<p>Escola</p>

</div>



<div class="card">

<h2>🔔 ${quantidade("lembretes")}</h2>

<p>Lembretes</p>

</div>


`;

}



// ======================
// COMPROMISSOS DE HOJE
// ======================

function carregarCompromissosHoje(){


const painel =
document.getElementById("compromissosHoje");


if(!painel) return;



const hoje =
new Date()
.toISOString()
.split("T")[0];



const compromissos =
JSON.parse(localStorage.getItem("compromissos")) || [];



const listaHoje =
compromissos
.filter(item => item.data === hoje);



if(listaHoje.length === 0){


    painel.innerHTML = `

    <div class="card">

    <h3>✅ Nenhum compromisso para hoje</h3>

    </div>

    `;

    return;

}



painel.innerHTML = "";



listaHoje.forEach(item=>{


painel.innerHTML += `


<div class="card">

<h3>${item.titulo}</h3>

<p>🕒 ${item.hora || "--:--"}</p>

<p>👤 ${item.membro}</p>

<p>📍 ${item.local || "-"}</p>

</div>


`;


});


}


carregarCompromissosHoje();
