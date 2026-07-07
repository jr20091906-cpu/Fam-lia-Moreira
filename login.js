function entrar(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;


    let usuarios = [

        {
            nome:"Laércio",
            usuario:"laercio",
            senha:"1234",
            perfil:"Administrador"
        },

        {
            nome:"Tainá",
            usuario:"taina",
            senha:"1234",
            perfil:"Responsável"
        },

        {
            nome:"Ana Clara",
            usuario:"anaclara",
            senha:"1234",
            perfil:"Filha"
        },

        {
            nome:"Isadora",
            usuario:"isadora",
            senha:"1234",
            perfil:"Filha"
        },

        {
            nome:"Isaac",
            usuario:"isaac",
            senha:"1234",
            perfil:"Filho"
        }

    ];


    let encontrado = usuarios.find(
        pessoa =>
        pessoa.usuario === usuario &&
        pessoa.senha === senha
    );


    if(encontrado){

        localStorage.setItem(
            "usuario",
            encontrado.nome
        );


        localStorage.setItem(
            "perfil",
            encontrado.perfil
        );


        window.location.href="dashboard.html";

    }

    else{

        alert("Usuário ou senha incorretos");

    }

}
