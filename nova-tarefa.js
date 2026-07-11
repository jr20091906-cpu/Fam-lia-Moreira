// Família Moreira
// Nova Tarefa v1.0

const formulario = document.getElementById("formTarefa");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let tarefas =
        JSON.parse(localStorage.getItem("tarefas")) || [];

    const agora = new Date().toISOString();

    const tarefa = {

        id: "tar_" + Date.now(),

        titulo:
            document.getElementById("titulo").value.trim(),

        responsavel:
            document.getElementById("responsavel").value,

        data:
            document.getElementById("data").value,

        prioridade:
            document.getElementById("prioridade").value,

        status:
            document.getElementById("status").value,

        observacoes:
            document.getElementById("observacoes").value.trim(),

        criadoEm: agora,

        atualizadoEm: agora

    };

    tarefas.push(tarefa);

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );

    alert("✅ Tarefa salva com sucesso!");

    window.location.href = "tarefas.html";

});
