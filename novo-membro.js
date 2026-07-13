// Família Moreira
// Novo Membro v1.1

const formulario = document.getElementById("formMembro");
const campoFoto = document.getElementById("foto");
const preview = document.getElementById("previewFoto");

let fotoBase64 = "";


// Pré-visualização da foto

campoFoto.addEventListener("change", function(){

    const arquivo = this.files[0];

    if(arquivo){

        const leitor = new FileReader();

        leitor.onload = function(e){

            fotoBase64 = e.target.result;

            preview.innerHTML =
            `<img src="${fotoBase64}">`;

        };

        leitor.readAsDataURL(arquivo);

    }

});


// Verifica edição

const editar =
localStorage.getItem("editarMembro");


const indice =
localStorage.getItem("indiceMembro");



if(editar){

    const membro =
    JSON.parse(editar);


    document.getElementById("nome").value =
    membro.nome || "";


    document.getElementById("usuario").value =
    membro.usuario || "";


    document.getElementById("senha").value =
    membro.senha || "";


    document.getElementById("perfil").value =
    membro.perfil || "Usuário";


    document.getElementById("nascimento").value =
    membro.nascimento || "";


    document.getElementById("telefone").value =
    membro.telefone || "";


    document.getElementById("observacoes").value =
    membro.observacoes || "";


    fotoBase64 =
    membro.foto || "";


    if(fotoBase64){

        preview.innerHTML =
        `<img src="${fotoBase64}">`;

    }

}




formulario.addEventListener("submit", function(e){

    e.preventDefault();


    let membros =
    JSON.parse(localStorage.getItem("membros")) || [];



    const membro = {


        nome:
        document.getElementById("nome").value,


        usuario:
        document.getElementById("usuario").value,


        senha:
        document.getElementById("senha").value,


        perfil:
        document.getElementById("perfil").value,


        nascimento:
        document.getElementById("nascimento").value,


        telefone:
        document.getElementById("telefone").value,


        observacoes:
        document.getElementById("observacoes").value,


        foto:
        fotoBase64

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
