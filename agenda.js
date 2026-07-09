// Família Moreira
// Agenda v1.0

let compromissos = [];

const lista = document.getElementById("listaCompromissos");
const botao = document.getElementById("novoCompromisso");

function atualizarLista(){

    lista.innerHTML = "";

    if(compromissos.length === 0){

        lista.innerHTML = `
        <div class="card">
            <h2>Nenhum compromisso cadastrado</h2>
            <p>Os compromissos aparecerão aqui.</p>
        </div>
        `;

        return;

    }

    compromissos.forEach(compromisso=>{

        lista.innerHTML += `
        <div class="card">

            <h2>${compromisso.titulo}</h2>

            <p><strong>👤 Membro:</strong> ${compromisso.membro}</p>

            <p><strong>📅 Data:</strong> ${compromisso.data}</p>

            <p><strong>🕒 Horário:</strong> ${compromisso.hora}</p>

        </div>
        `;

    });

}

botao.addEventListener("click",()=>{

    const titulo = prompt("Compromisso:");

    if(!titulo) return;

    const membro = prompt("Para quem é o compromisso?");

    if(!membro) return;

    const data = prompt("Data (dd/mm/aaaa):");

    if(!data) return;

    const hora = prompt("Horário:");

    if(!hora) return;

    compromissos.push({

        titulo,
        membro,
        data,
        hora

    });

    atualizarLista();

});

atualizarLista();
