// Família Moreira
// Cadastro de Compromissos v1.0

const formulario = document.getElementById("formCompromisso");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const compromisso = {

        titulo: document.getElementById("titulo").value,

        membro: document.getElementById("membro").value,

        data: document.getElementById("data").value,

        hora: document.getElementById("hora").value,

        local: document.getElementById("local").value,

        observacoes: document.getElementById("observacoes").value

    };

    let lista = JSON.parse(localStorage.getItem("compromissos")) || [];

    lista.push(compromisso);

    localStorage.setItem("compromissos", JSON.stringify(lista));

    alert("✅ Compromisso salvo com sucesso!");

    window.location.href = "agenda.html";

});
