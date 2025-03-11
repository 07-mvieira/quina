
function verificarNome(){
    let nome = document.getElementById("nomeCaixa").value;
    document.getElementById("hidden").style.display = "block";
    document.getElementById("confirmacao").innerHTML = `você confirma que seu nome é ${nome}?`;
};

function confirma(){
    let nome = document.getElementById("nomeCaixa").value;
    document.getElementsByClassName("confBotao").disabled = true;
    document.getElementById("sim").style.display = "block";
    document.getElementById("sim").innerHTML = `entendi, o seu nome é ${nome}! lindo nome :D`;
};

function rejeita(){
    document.getElementById("sim").innerHTML = `entendido. recomeçando sistema`;
    window.location.reload()
}