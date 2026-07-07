function entrar(){

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;


    const usuarios = {

        "laercio":{
            senha:"1234",
            nome:"Laércio",
            perfil:"Administrador"
        },

        "taina":{
            senha:"1234",
            nome:"Tainá",
            perfil:"Responsável"
        },

        "anaclara":{
            senha:"1234",
            nome:"Ana Clara",
            perfil:"Filha"
        },

        "isadora":{
            senha:"1234",
            nome:"Isadora",
            perfil:"Filha"
        },

        "isaac":{
            senha:"1234",
            nome:"Isaac",
            perfil:"Filho"
        }

    };


    if(usuarios[usuario] && usuarios[usuario].senha === senha){


        localStorage.setItem(
            "nome",
            usuarios[usuario].nome
        );


        localStorage.setItem(
            "perfil",
            usuarios[usuario].perfil
        );


        window.location.href = "dashboard.html";


    }else{


        alert("Usuário ou senha incorretos");


    }

}
