// Família Moreira
// Configurações v1.0


const usuarioAtual =
document.getElementById("usuarioAtual");


const modoEscuro =
document.getElementById("modoEscuro");



// Mostrar usuário conectado

const nome =
localStorage.getItem("nome");


const perfil =
localStorage.getItem("perfil");



if(nome){


    usuarioAtual.innerHTML =

    `
    👤 ${nome}<br>
    👑 ${perfil || "Usuário"}
    `;


}





// Carregar preferência de aparência


const temaSalvo =
localStorage.getItem("modoEscuro");



if(temaSalvo === "true"){


    document.body.classList.add("escuro");

    modoEscuro.checked = true;


}




// Alterar tema


modoEscuro.addEventListener("change",()=>{


    if(modoEscuro.checked){


        document.body.classList.add("escuro");


        localStorage.setItem(
            "modoEscuro",
            "true"
        );


    }else{


        document.body.classList.remove("escuro");


        localStorage.setItem(
            "modoEscuro",
            "false"
        );


    }


});
