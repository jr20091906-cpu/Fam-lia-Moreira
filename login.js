const membros = {

    laercio: {
        nome: "Laércio",
        senha: "201293",
        perfil: "Administrador"
    },

    taina: {
        nome: "Tainá",
        senha: "120695",
        perfil: "Responsável"
    },

    anaclara: {
        nome: "Ana Clara",
        senha: "050614",
        perfil: "Filha"
    },

    isadora: {
        nome: "Isadora",
        senha: "010219",
        perfil: "Filha"
    },

    isaac: {
        nome: "Isaac",
        senha: "010425",
        perfil: "Filho"
    }

};


let membroSelecionado = "";


window.onload = function(){

    const parametros = new URLSearchParams(window.location.search);

    membroSelecionado = parametros.get("membro");


    if(membroSelecionado && membros[membroSelecionado]){

        document.getElementById("tituloMembro").innerHTML =
        "👤 " + membros[membroSelecionado].nome;

    }

    else{

        document.getElementById("tituloMembro").innerHTML =
        "Membro não identificado";

    }

};



function entrar(){

    const senhaDigitada = document.getElementById("senha").value;


    if(
        membroSelecionado &&
        membros[membroSelecionado] &&
        senhaDigitada === membros[membroSelecionado].senha
    ){

        localStorage.setItem(
            "nome",
            membros[membroSelecionado].nome
        );


        localStorage.setItem(
            "perfil",
            membros[membroSelecionado].perfil
        );


        window.location.href = "dashboard.html";


    }else{


        alert("Senha incorreta");


    }

}
