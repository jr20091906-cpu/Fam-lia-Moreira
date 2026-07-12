// Família Moreira
// Novo Lembrete v1.0

const formulario = document.getElementById("formLembrete");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let lembretes =
    JSON.parse(localStorage.getItem("lembretes")) || [];

    const lembrete = {

        id: "lem_" + Date.now(),

        titulo:
        document.getElementById("titulo").value.trim(),

        responsavel:
        document.getElementById("responsavel").value,

        data:
        document.getElementById("data").value,

        prioridade:
        document.getElementById("prioridade").value,

        observacoes:
        document.getElementById("observacoes").value.trim(),

        criadoEm:
        new Date().toISOString()

    };

    lembretes.push(lembrete);

    localStorage.setItem(
        "lembretes",
        JSON.stringify(lembretes)
    );

    alert("✅ Lembrete salvo com sucesso!");

    window.location.href = "lembretes.html";

});
