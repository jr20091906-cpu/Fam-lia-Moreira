function entrar(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;


    if(usuario === "laercio" && senha === "1234"){

        localStorage.setItem("nome","Laércio");
        localStorage.setItem("perfil","Administrador");

        window.location.href = "dashboard.html";

    }

    else if(usuario === "taina" && senha === "1234"){

        localStorage.setItem("nome","Tainá");
        localStorage.setItem("perfil","Responsável");

        window.location.href = "dashboard.html";

    }

    else if(usuario === "anaclara" && senha === "1234"){

        localStorage.setItem("nome","Ana Clara");
        localStorage.setItem("perfil","Filha");

        window.location.href = "dashboard.html";

    }

    else if(usuario === "isadora" && senha === "1234"){

        localStorage.setItem("nome","Isadora");
        localStorage.setItem("perfil","Filha");

        window.location.href = "dashboard.html";

    }

    else if(usuario === "isaac" && senha === "1234"){

        localStorage.setItem("nome","Isaac");
        localStorage.setItem("perfil","Filho");

        window.location.href = "dashboard.html";

    }

    else{

        alert("Usuário ou senha incorretos");

    }

}
