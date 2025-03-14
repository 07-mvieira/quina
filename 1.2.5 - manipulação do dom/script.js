const fire = document.getElementById("incrivel");

let nomeInput;
let nome;
let fireSong;

document.getElementById("btn-2").setAttribute("disabled", true);
document.getElementById("btn-4").setAttribute("disabled", true);
document.getElementById("btn-7").setAttribute("disabled", true);
document.getElementById("btn-9").setAttribute("onclick", "mikuOn()");
document.getElementById("btn-9").style.backgroundColor = "#999"
document.getElementById("btn-9").style.color = "#0fd"
document.getElementById("btn-10").style.backgroundColor = "#ff68d9";
document.getElementById("btn-10").innerHTML = `ligar o rádio 🎲`;

function botaoVermelho(){
    document.querySelector("body").style.backgroundColor = "#ac2828";
    document.querySelector("h2").style.color = "#fff";

    document.getElementById("btn-1").style.backgroundColor = "#d99518";
    document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo laranja`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoLaranja()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoLaranja(){
    document.querySelector("body").style.backgroundColor = "#d99518";
    document.querySelector("h2").style.color = "#fff";

    document.getElementById("btn-1").style.backgroundColor = "#ffe550";
    document.getElementById("btn-1").style.color = "#000";
    document.getElementById("btn-1").innerHTML = `deixar o fundo amarelo`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoAmarelo()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoAmarelo(){
    document.querySelector("body").style.backgroundColor = "#ffe550";
    document.querySelector("h2").style.color = "#000";

    document.getElementById("btn-1").style.backgroundColor = "#5eb25e";
    document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo verde`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoVerde()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoVerde(){
    document.querySelector("body").style.backgroundColor = "#5eb25e";
    document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#57c1c1";
    document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo azul`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoAzul()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoAzul(){
    document.querySelector("body").style.backgroundColor = "#57c1c1";
    document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#505bbd";
    document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo anil`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoAnil()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoAnil(){
    document.querySelector("body").style.backgroundColor = "#505bbd";
    document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#aa37c6";
    document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo roxo`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoRoxo()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoRoxo(){
    document.querySelector("body").style.backgroundColor = "#aa37c6";
    // document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#ac2828";
    // document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo vermelho`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoVermelho()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoPadrao(){
    document.querySelector("body").style.backgroundColor = "#f29c91";
    document.querySelector("h2").style.color = "#000"

    document.getElementById("btn-2").setAttribute("disabled", true);
}

function sidebarVermelho(){
    document.getElementById("sidenav").style.backgroundColor = "#ac2828";
    document.querySelector("h1").style.color = "#fff"

    document.getElementById("btn-3").style.backgroundColor = "#d99518";
    document.getElementById("btn-3").style.color = "#fff";
    document.getElementById("btn-3").innerHTML = `deixar o sidebar laranja`;
    document.getElementById("btn-3").setAttribute("onclick", "sidebarLaranja()");

    document.getElementById("btn-4").removeAttribute("disabled");
}

function sidebarLaranja(){
    document.getElementById("sidenav").style.backgroundColor = "#d99518";
    document.querySelector("h1").style.color = "#fff"

    document.getElementById("btn-3").style.backgroundColor = "#ffe550";
    document.getElementById("btn-3").style.color = "#000";
    document.getElementById("btn-3").innerHTML = `deixar o sidebar amarelo`;
    document.getElementById("btn-3").setAttribute("onclick", "sidebarAmarelo()");

    document.getElementById("btn-4").removeAttribute("disabled");
}

function sidebarAmarelo(){
    document.getElementById("sidenav").style.backgroundColor = "#ffe550";
    document.querySelector("h1").style.color = "#000"

    document.getElementById("btn-3").style.backgroundColor = "#5eb25e";
    document.getElementById("btn-3").style.color = "#fff";
    document.getElementById("btn-3").innerHTML = `deixar o sidebar verde`;
    document.getElementById("btn-3").setAttribute("onclick", "sidebarVerde()");

    document.getElementById("btn-4").removeAttribute("disabled");
}

function sidebarVerde(){
    document.getElementById("sidenav").style.backgroundColor = "#5eb25e";
    document.querySelector("h1").style.color = "#fff"

    document.getElementById("btn-3").style.backgroundColor = "#57c1c1";
    document.getElementById("btn-3").style.color = "#fff";
    document.getElementById("btn-3").innerHTML = `deixar o sidebar azul`;
    document.getElementById("btn-3").setAttribute("onclick", "sidebarAzul()");

    document.getElementById("btn-4").removeAttribute("disabled");
}

function sidebarAzul(){
    document.getElementById("sidenav").style.backgroundColor = "#57c1c1";
    document.querySelector("h1").style.color = "#fff"

    document.getElementById("btn-3").style.backgroundColor = "#505bbd";
    document.getElementById("btn-3").style.color = "#fff";
    document.getElementById("btn-3").innerHTML = `deixar o sidebar anil`;
    document.getElementById("btn-3").setAttribute("onclick", "sidebarAnil()");

    document.getElementById("btn-4").removeAttribute("disabled");
}

function sidebarAnil(){
    document.getElementById("sidenav").style.backgroundColor = "#505bbd";
    document.querySelector("h1").style.color = "#fff"

    document.getElementById("btn-3").style.backgroundColor = "#aa37c6";
    document.getElementById("btn-3").style.color = "#fff";
    document.getElementById("btn-3").innerHTML = `deixar o sidebar roxo`;
    document.getElementById("btn-3").setAttribute("onclick", "sidebarRoxo()");

    document.getElementById("btn-4").removeAttribute("disabled");
}

function sidebarRoxo(){
    document.getElementById("sidenav").style.backgroundColor = "#aa37c6";
    document.querySelector("h1").style.color = "#fff"

    document.getElementById("btn-3").style.backgroundColor = "#ac2828";
    document.getElementById("btn-3").style.color = "#fff";
    document.getElementById("btn-3").innerHTML = `deixar o sidebar vermelho`;
    document.getElementById("btn-3").setAttribute("onclick", "sidebarVermelho()");

    document.getElementById("btn-4").removeAttribute("disabled");
}

function sidebarPadrao(){
    document.getElementById("sidenav").style.backgroundColor = "#000";
    document.querySelector("h1").style.color = "#fff"

    document.getElementById("btn-4").setAttribute("disabled", true);
}

function qualNome(){
    let textoNome;
    let nomeInput = window.prompt("olá, qual é o seu nome?");
    nome = nomeInput;

    if (nome == ""){
        textoNome = `por favor, insira um nome!`
    } else if (nome == null){
        console.log("a")
    } else {
        alert(`entendi, seu nome é ${nome}!`)
        document.getElementById("btn-5").setAttribute("onclick", "oi()")
        document.getElementById("btn-5").innerHTML = `olá ${nome}`
        console.log(nome)
    }
}

function oi(){
    console.log(nome)
    alert(`e aiii ${nome} como vai :3`)
}

function esconderBotao6(){
    document.getElementById("btn-6").style.visibility = "hidden";
    document.getElementById("btn-7").removeAttribute("disabled");
}

function mostrarBotao6(){
    document.getElementById("btn-6").style.visibility = "visible";
    document.getElementById("btn-7").setAttribute("disabled", true);
}

function parImpar(){
    let numeroInput = window.prompt("escolha um número inteiro:")

    if(numeroInput % 2 == 1){
        console.log(numeroInput)
        alert("eu acho que esse número é ímpar!")
    } else if(numeroInput % 2 == 0){
        console.log(numeroInput)
        alert("eu acho que esse número é par!")
    } else {
        console.log(numeroInput)
        alert("eu só aceito números inteiros!")
    }
}

function mikuOn(){
    alert(`i'm hiding in your webpage now :D`);
    document.getElementById("hatsune-miku").style.display = "block";
    document.getElementById("btn-9").setAttribute("onclick", "mikuOff()");
    document.getElementById("btn-9").style.backgroundColor = "#0fd"
    document.getElementById("btn-9").style.color = "#999"
}

function mikuOff(){
    alert(`bye bye!`);
    document.getElementById("hatsune-miku").style.display = "none";
    document.getElementById("btn-9").setAttribute("onclick", "mikuOn()");
    document.getElementById("btn-9").style.backgroundColor = "#999"
    document.getElementById("btn-9").style.color = "#0fd"
}

function musica(){
    let fireSong = Math.random() * 4;
    console.log(`inicial: ${fireSong}`);
    fireSong = Math.round(fireSong);
    console.log(`arredondado: ${fireSong}`);
    //chance de 1 em 5(?)

    if (fireSong == 0){
        document.getElementById("incrivel").setAttribute("src", "./assets/o mah gah.mp3")
    } else {
         document.getElementById("incrivel").setAttribute("src", "./assets/waow.mp3")
    }

    fire.play();
    document.getElementById("btn-10").style.backgroundColor = "#802189";
    document.getElementById("btn-10").setAttribute("onclick", "pause()");
    document.getElementById("btn-10").innerHTML = `desligar o rádio`;
}

function pause(){
    fire.pause();
    document.getElementById("btn-10").style.backgroundColor = "#ff68d9";
    document.getElementById("btn-10").setAttribute("onclick", "musica()")
    document.getElementById("btn-10").innerHTML = `ligar o rádio 🎲`;
}

/*todas as cores
    #ac2828; vermelho, vai com branco
    #d99518; laranja, vai com branco
    #ffe550; amarelo, vai com preto
    #5eb25e; verde, vai com branco
    #57c1c1; azul, vai com branco
    #505bbd; anil, vai com branco
    #aa37c6; roxo, vai com branco
*/

/* crimes de guerra

let corFundo = document.querySelector("body").style.backgroundColor;
let corBotaoFundo = document.getElementById("btn-1").style.backgroundColor;
let corSidebar = document.getElementById("sidenav").style.backgroundColor;
let corBotaoSidebar = document.getElementById("btn-3").style.backgroundColor;

console.log(`corFundo: ${corFundo}`);
console.log(`corBotaoFundo: ${corBotaoFundo}`);
console.log(`corSidebar: ${corSidebar}`);
console.log(`corBotaoSidebar: ${corBotaoSidebar}`);

function botaoVermelho(){
    document.querySelector("body").style.backgroundColor = "#ac2828";
    let corFundo = document.querySelector("body").style.backgroundColor;
    document.getElementById("btn-1").style.backgroundColor = "#d99518";
    let corBotaoFundo = document.getElementById("btn-1").style.backgroundColor;
    document.getElementById("btn-1").style.color = "#000";

    console.log(`corFundo: ${corFundo}`);
    console.log(`corBotaoFundo: ${corBotaoFundo}`);
    console.log(`corSidebar: ${corSidebar}`);
    console.log(`corBotaoSidebar: ${corBotaoSidebar}`);

    if (corFundo = corBotaoSidebar){
        document.getElementById("btn-3").style.border = "#000000";
    } else {
        document.getElementById("btn-3").style.border = "#00000000"
    }
}*/