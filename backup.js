// Família Moreira
// Backup v1.0


const botaoExportar =
document.getElementById("exportar");


const campoImportar =
document.getElementById("importar");



const bancos = [

    "membros",
    "compromissos",
    "tarefas",
    "rotinas",
    "registrosEscola",
    "lembretes"

];




// EXPORTAR BACKUP

botaoExportar.addEventListener("click",()=>{


    const backup = {};



    bancos.forEach((item)=>{


        backup[item] =
        JSON.parse(localStorage.getItem(item)) || [];


    });



    const arquivo =
    new Blob(
        [
            JSON.stringify(
                backup,
                null,
                2
            )
        ],
        {
            type:"application/json"
        }
    );



    const link =
    document.createElement("a");


    link.href =
    URL.createObjectURL(arquivo);


    link.download =
    "backup-familia-moreira.json";


    link.click();



    alert("✅ Backup criado com sucesso!");



});







// IMPORTAR BACKUP


campoImportar.addEventListener("change",function(){


    const arquivo =
    this.files[0];



    if(!arquivo) return;



    const leitor =
    new FileReader();



    leitor.onload = function(e){



        const dados =
        JSON.parse(e.target.result);



        bancos.forEach((item)=>{


            if(dados[item]){


                localStorage.setItem(
                    item,
                    JSON.stringify(dados[item])
                );


            }


        });



        alert(
            "✅ Backup restaurado com sucesso!"
        );



    };



    leitor.readAsText(arquivo);



});
