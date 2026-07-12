// Família Moreira
// Administração v1.0

const painel = document.getElementById("painelResumo");

function total(chave){

    return JSON.parse(localStorage.getItem(chave))?.length || 0;

}

const dados = {

    compromissos: total("compromissos"),
    tarefas: total("tarefas"),
    rotinas: total("rotinas"),
    escola: total("registrosEscola"),
    lembretes: total("lembretes"),
    membros: total("membros")

};

if(painel){

    painel.innerHTML = `

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

    <div class="card">
        <h2>👨‍👩‍👧‍👦 ${dados.membros}</h2>
        <p>Membros</p>
    </div>

    `;

}
