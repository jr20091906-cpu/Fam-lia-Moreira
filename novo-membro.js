// Família Moreira
// Novo Membro v2.0

const formulario = document.getElementById("formMembro");
const campoFoto = document.getElementById("foto");
const preview = document.getElementById("previewFoto");

let fotoBase64 = "";

campoFoto.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function (e) {

        fotoBase64 = e.target.result;

        if (preview) {

            preview.innerHTML = `<img src="${fotoBase64}">`;

        }

    };

    leitor.readAsDataURL(arquivo);

});

const editar =
JSON.parse(localStorage.getItem("editarMembro"));

const indice =
localStorage.getItem("indiceMembro");

if (editar) {

    document.getElementById("nome").value =
    editar.nome || "";

    document.getElementById("usuario").value =
    editar.usuario || "";

    document.getElementById("senha").value =
    editar.senha || "";

    document.getElementById("perfil").value =
    editar.perfil || "Usuário";

    document.getElementById("telefone").value =
    editar.telefone || "";

    document.getElementById("nascimento").value =
    editar.nascimento || "";

    document.getElementById("observacoes").value =
    editar.observacoes || "";

    fotoBase64 = editar.foto || "";

    if (fotoBase64 && preview) {

        preview.innerHTML =
        `<img src="${fotoBase64}">`;

    }

}

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let membros =
    JSON.parse(localStorage.getItem("membros")) || [];

    const membro = {

        id:
        editar?.id ||
        Date.now().toString(),

        nome:
        document.getElementById("nome").value.trim(),

        usuario:
        document.getElementById("usuario").value.trim(),

        senha:
        document.getElementById("senha").value,

        perfil:
        document.getElementById("perfil").value,

        telefone:
        document.getElementById("telefone").value,

        nascimento:
        document.getElementById("nascimento").value,

        observacoes:
        document.getElementById("observacoes").value,

        foto:
        fotoBase64

    };

    if (indice !== null) {

        membros[Number(indice)] = membro;

    } else {

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
