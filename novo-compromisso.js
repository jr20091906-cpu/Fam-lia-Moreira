// Família Moreira
// Novo Compromisso v4.0

const formulario = document.getElementById("formCompromisso");

const indiceEdicao = localStorage.getItem("indiceEdicao");

const compromissoEdicao =
JSON.parse(localStorage.getItem("editarCompromisso"));


// Carregar dados quando for edição

if (indiceEdicao !== null && compromissoEdicao) {

    document.getElementById("titulo").value =
        compromissoEdicao.titulo || "";

    document.getElementById("membro").value =
        compromissoEdicao.membro || "todos";

    document.getElementById("data").value =
        compromissoEdicao.data || "";

    document.getElementById("hora").value =
        compromissoEdicao.hora || "";

    document.getElementById("local").value =
        compromissoEdicao.local || "";

    document.getElementById("observacoes").value =
        compromissoEdicao.observacoes || "";

}



formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let lista =
        JSON.parse(localStorage.getItem("compromissos")) || [];


    const agora = new Date().toISOString();


    const compromisso = {

        id:

            compromissoEdicao?.id ||

            "cmp_" + Date.now(),

        titulo:
            document.getElementById("titulo").value.trim(),

        membro:
            document.getElementById("membro").value,

        data:
            document.getElementById("data").value,

        hora:
            document.getElementById("hora").value,

        local:
            document.getElementById("local").value.trim(),

        observacoes:
            document.getElementById("observacoes").value.trim(),

        status:

            compromissoEdicao?.status ||

            "ativo",

        criadoEm:

            compromissoEdicao?.criadoEm ||

            agora,

        atualizadoEm:

            agora

    };


    if (indiceEdicao !== null) {

        lista[indiceEdicao] = compromisso;

    } else {

        lista.push(compromisso);

    }


    localStorage.setItem(

        "compromissos",

        JSON.stringify(lista)

    );


    localStorage.removeItem("editarCompromisso");

    localStorage.removeItem("indiceEdicao");


    alert("✅ Compromisso salvo com sucesso!");


    window.location.href = "agenda.html";

});
