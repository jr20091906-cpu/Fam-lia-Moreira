let membroSelecionado = "";



const parametros = new URLSearchParams(
    window.location.search
);


membroSelecionado = parametros.get("usuario");



const usuarios = {


    laercio:{
        nome:"Laércio",
        senha:"1234",
        perfil:"Administrador"
    },


    taina:{
        nome:"Tainá",
        senha:"1234",
        perfil:"Responsável"
    },


    anaclara:{
        nome:"Ana Clara",
        senha:"1234",
        perfil:"Filha"
    },


    isadora:{
        nome:"Isadora",
        senha:"1234",
        perfil:"Filha"
    },


    isaac:{
        nome:"Isaac",
        senha:"1234",
        perfil:"Filho"
    }


};



if(usuarios[membroSelecionado]){


    document.getElementById("nomeMembro").innerHTML =
    "Olá, " + usuarios[membroSelecionado].nome;


}



function entrar(){


    let senhaDigitada =
    document.getElementById("senha").value;



    let usuario =
    usuarios[membroSelecionado];



    if(usuario && senhaDigitada === usuario.senha){


        localStorage.setItem(
            "nome",
            usuario.nome
        );


        localStorage.setItem(
            "perfil",
            usuario.perfil
        );


        window.location.href="dashboard.html";


    }

    else{


        alert("Senha incorreta");


    }


}
