// Família Moreira
// Nova Rotina v1.0

const formulario = document.getElementById("formRotina");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let rotinas =
    JSON.parse(localStorage.getItem("rotinas")) || [];

    const rotina = {

        id: "rot_" + Date.now(),

        titulo:
        document.getElementById("titulo").value.trim(),

        responsavel:
        document.getElementById("responsavel").value,

        frequencia:
        document.getElementById("frequencia").value,

        observacoes:
        document.getElementById("observacoes").value.trim(),

        criadoEm:
        new Date().toISOString()

    };

    rotinas.push(rotina);

    localStorage.setItem(
        "rotinas",
        JSON.stringify(rotinas)
    );

    alert("✅ Rotina salva com sucesso!");

    window.location.href = "rotina.html";

});
