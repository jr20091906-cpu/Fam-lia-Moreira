// Família Moreira
// Gerenciar Membros v1.2

const lista = document.getElementById("listaMembros");
const botao = document.getElementById("novoMembro");


botao.addEventListener("click", () => {

    localStorage.removeItem("editarMembro");
    localStorage.removeItem("indiceMembro");

    window.location.href = "novo-membro.html";

});



function carregarMembros(){

    const membros =
    JSON.parse(localStorage.getItem("membros")) || [];


    lista.innerHTML = "";


    if(membros.length === 0){

        lista.innerHTML = `

        <div class="card">

            <h2>Nenhum membro cadastrado</h2>

            <p>Cadastre o primeiro membro da família.</p>

        </div>

        `;

        return;

    }



    membros.forEach((membro,index)=>{


        lista.innerHTML += `

        <div class="card">


            <div class="membro">


                <div class="foto">

                    ${
                    membro.foto
                    ?
                    `<img src="${membro.foto}">`
                    :
                    "👤"
                    }

                </div>



                <div class="info">

                    <h2>${membro.nome}</h2>

                    <p>🔑 Usuário: ${membro.usuario || "-"}</p>

                    <p>👑 Perfil: ${membro.perfil || "-"}</p>

                    <p>📞 ${membro.telefone || "-"}</p>

                    <p>🎂 ${membro.nascimento || "-"}</p>

                </div>


            </div>



            <div class="acoes-membro">


                <button 
                class="editar"
                onclick="editarMembro(${index})">

                ✏️ Editar

                </button>



                <button 
                class="excluir"
                onclick="excluirMembro(${index})">

                🗑️ Excluir

                </button>


            </div>


        </div>

        `;


    });


}




function excluirMembro(index){


    let membros =
    JSON.parse(localStorage.getItem("membros")) || [];


    if(confirm("Deseja excluir este membro?")){


        membros.splice(index,1);



        localStorage.setItem(
            "membros",
            JSON.stringify(membros)
        );


        carregarMembros();

    }


}





function editarMembro(index){


    let membros =
    JSON.parse(localStorage.getItem("membros")) || [];



    localStorage.setItem(
        "editarMembro",
        JSON.stringify(membros[index])
    );



    localStorage.setItem(
        "indiceMembro",
        index
    );



    window.location.href =
    "novo-membro.html";


}




carregarMembros();
