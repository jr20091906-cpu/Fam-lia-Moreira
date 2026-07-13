// Família Moreira
// Novo Membro v1.0

const formulario = document.getElementById("formMembro");
const campoFoto = document.getElementById("foto");

let fotoBase64 = "";


campoFoto.addEventListener("change", function(){

    const arquivo = this.files[0];


    if(arquivo){

        const leitor = new FileReader();


        leitor.onload = function(e){

            fotoBase64 = e.target.result;

        };


        leitor.readAsDataURL(arquivo);

    }

});



const editar =
localStorage.getItem("editarMembro");


const indice =
localStorage.getItem("indiceMembro");



if(editar){

    const membro =
    JSON.parse(editar);


    document.getElementById("nome").value =
    membro.nome;


    document.getElementById("perfil").value =
    membro.perfil;


    document.getElementById("telefone").value =
    membro.telefone || "";


    document.getElementById("nascimento").value =
    membro.nascimento || "";


    document.getElementById("observacoes").value =
    membro.observacoes || "";


    document.getElementById("senha").value =
    membro.senha;


    fotoBase64 =
    membro.foto || "";

}



formulario.addEventListener("submit", function(e){

    e.preventDefault();


    let membros =
    JSON.parse(localStorage.getItem("membros")) || [];



    const membro = {


        nome:
        document.getElementById("nome").value,


        foto:
        fotoBase64,


        perfil:
        document.getElementById("perfil").value,


        senha:
        document.getElementById("senha").value,


        telefone:
        document.getElementById("telefone").value,


        nascimento:
        document.getElementById("nascimento").value,


        observacoes:
        document.getElementById("observacoes").value


    };



    if(indice !== null){


        membros[indice] = membro;


    }else{


        membros.push(membro);


    }



    localStorage.setItem(
        "membros",
        JSON.stringify(membros)
    );



    localStorage.removeItem("editarMembro");

    localStorage.removeItem("indiceMembro");



    alert("✅ Membro salvo com sucesso!");



    window.location.href =
    "gerenciar-membros.html";


});
