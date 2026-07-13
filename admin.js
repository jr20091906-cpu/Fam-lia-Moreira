// Família Moreira
// Administração v1.1

const painel = document.getElementById("painelResumo");


function contar(chave){

    const dados =
    JSON.parse(localStorage.getItem(chave)) || [];

    return dados.length;

}



function carregarPainel(){


    const dados = {

        membros: contar("membros"),

        compromissos: contar("compromissos"),

        tarefas: contar("tarefas"),

        rotinas: contar("rotinas"),

        escola: contar("registrosEscola"),

        lembretes: contar("lembretes")

    };



    if(painel){


        painel.innerHTML = `


        <div class="card">

        <h2>👨‍👩‍👧‍👦 ${dados.membros}</h2>

        <p>Membros</p>

        </div>



        <div class="card">

        <h2>📅 ${dados.compromissos}</h2>

        <p>Compromissos</p>

        </div>



        <div class="card">

        <h2>✅ ${dados.tarefas}</h2>

        <p>Tarefas</p>

        </div>



        <div class="card">

        <h2>🏠 ${dados.rotinas}</h2>

        <p>Rotinas</p>

        </div>



        <div class="card">

        <h2>📚 ${dados.escola}</h2>

        <p>Escola/Cursos</p>

        </div>



        <div class="card">

        <h2>🔔 ${dados.lembretes}</h2>

        <p>Lembretes</p>

        </div>


        `;


    }


}



carregarPainel();
