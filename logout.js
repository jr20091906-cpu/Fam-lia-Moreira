// Família Moreira
// Logout v1.0


function sair(){

    if(confirm("Deseja sair do aplicativo?")){


        localStorage.removeItem("usuarioLogado");

        localStorage.removeItem("nome");

        localStorage.removeItem("perfil");


        window.location.href =
        "index.html";


    }

}
