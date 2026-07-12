// Família Moreira
// Novo Registro Escola v1.0

const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let registros =
    JSON.parse(localStorage.getItem("registrosEscola")) || [];


    const registro = {

        id: "esc_" + Date.now(),

        titulo:
        document.getElementById("titulo").value.trim(),

        responsavel:
        document.getElementById("responsavel").value,

        disciplina:
        document.getElementById("disciplina").value.trim(),

        data:
        document.getElementById("data").value,

        status:
        document.getElementById("status").value,

        observacoes:
        document.getElementById("observacoes").value.trim(),

        criadoEm:
        new Date().toISOString()

    };


    registros.push(registro);


    localStorage.setItem(
        "registrosEscola",
        JSON.stringify(registros)
    );


    alert("✅ Registro salvo com sucesso!");


    window.location.href =
    "escola.html";


});
