let idade = 0;

function lerNumero(){
    idade = document.getElementById("digitarIdade").value;

    if (idade >= 0 && idade < 13){
        document.getElementById("respostaIdade").innerHTML = "você é criança.";
        document.getElementById("respostaDirigir").innerHTML = "você não pode dirigir.";
        document.getElementById("respostaDirigir").classList.add("negado");
        document.getElementById("respostaDirigir").classList.remove("permitido");
    } else if (idade >= 13 && idade < 18) {
        document.getElementById("respostaIdade").innerHTML = "você é adolescente.";
        document.getElementById("respostaDirigir").innerHTML = "você não pode dirigir.";
        document.getElementById("respostaDirigir").classList.add("negado");
        document.getElementById("respostaDirigir").classList.remove("permitido");
    } else if (idade >= 18 && idade < 60) {
        document.getElementById("respostaIdade").innerHTML = "você é adulto/a.";
        document.getElementById("respostaDirigir").innerHTML = "você pode dirigir!";
        document.getElementById("respostaDirigir").classList.add("permitido");
        document.getElementById("respostaDirigir").classList.remove("negado");
    } else if (idade >=60 && idade < 128) { 
        document.getElementById("respostaIdade").innerHTML = "você é idoso/a.";
        document.getElementById("respostaDirigir").innerHTML = "você pode dirigir!";
        document.getElementById("respostaDirigir").classList.add("permitido");
        document.getElementById("respostaDirigir").classList.remove("negado");
    } else {
        document.getElementById("respostaIdade").style.display = "none";
        document.getElementById("respostaDirigir").innerHTML = "dados inválidos!";
        document.getElementById("respostaDirigir").classList.add("negado");
        document.getElementById("respostaDirigir").classList.remove("permitido");
    }
    document.getElementById("resposta").style.display = "block"
}

function purge(){
    window.location.reload(true)
}