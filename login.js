function entrar(){

    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("senha").value;


    const usuarios = [

        {
            usuario: "laercio",
            senha: "1234",
            nome: "Laércio",
            perfil: "Administrador"
        },

        {
            usuario: "taina",
            senha: "1234",
            nome: "Tainá",
            perfil: "Responsável"
        },

        {
            usuario: "anaclara",
            senha: "1234",
            nome: "Ana Clara",
            perfil: "Filha"
        },

        {
            usuario: "isadora",
            senha: "1234",
            nome: "Isadora",
            perfil: "Filha"
        },

        {
            usuario: "isaac",
            senha: "1234",
            nome: "Isaac",
            perfil: "Filho"
        }

    ];


    const usuarioEncontrado = usuarios.find(

        pessoa =>
        pessoa.usuario === usuarioDigitado &&
        pessoa.senha === senhaDigitada

    );


    if(usuarioEncontrado){


        localStorage.setItem(
            "nome",
            usuarioEncontrado.nome
        );


        localStorage.setItem(
            "perfil",
            usuarioEncontrado.perfil
        );


        window.location.href = "dashboard.html";


    } else {


        alert("Usuário ou senha incorretos");


    }

}
