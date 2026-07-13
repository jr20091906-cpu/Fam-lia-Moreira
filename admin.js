// Família Moreira
// Painel Administração v2.0

const painel = document.getElementById("painelResumo");


function buscarQuantidade(nome){

    const dados =
    JSON.parse(localStorage.getItem(nome)) || [];

    return dados.length;

}



function carregarResumo(){


    if(!painel) return;



    const resumo = {


        membros:
        buscarQuantidade("membros"),


        compromissos:
        buscarQuantidade("compromissos"),


        tarefas:
        buscarQuantidade("tarefas"),


        rotinas:
        buscarQuantidade("rotinas"),


        escola:
        buscarQuantidade("registrosEscola"),


        lembretes:
        buscarQuantidade("lembretes")


    };



    painel.innerHTML = `


    <div class="card">

        <h2>👨‍👩‍👧‍👦 ${resumo.membros}</h2>

        <p>Membros cadastrados</p>

    </div>



    <div class="card">

        <h2>📅 ${resumo.compromissos}</h2>

        <p>Compromissos</p>

    </div>



    <div class="card">

        <h2>✅ ${resumo.tarefas}</h2>

        <p>Tarefas</p>

    </div>



    <div class="card">

        <h2>🏠 ${resumo.rotinas}</h2>

        <p>Rotinas</p>

    </div>



    <div class="card">

        <h2>📚 ${resumo.escola}</h2>

        <p>Escola e Cursos</p>

    </div>



    <div class="card">

        <h2>🔔 ${resumo.lembretes}</h2>

        <p>Lembretes</p>

    </div>


    `;


}



carregarResumo();
