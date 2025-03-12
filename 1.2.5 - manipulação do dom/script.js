document.getElementById("btn-2").setAttribute("disabled", true);
document.getElementById("btn-4").setAttribute("disabled", true);

function botaoVermelho(){
    document.querySelector("body").style.backgroundColor = "#ac2828";
    document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#d99518";
    document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo laranja`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoLaranja()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoLaranja(){
    document.querySelector("body").style.backgroundColor = "#d99518";
    document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#ffe550";
    document.getElementById("btn-1").style.color = "#000";
    document.getElementById("btn-1").innerHTML = `deixar o fundo amarelo`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoAmarelo()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoAmarelo(){
    document.querySelector("body").style.backgroundColor = "#ffe550";
    document.querySelector("h2").style.color = "#000"

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
    // document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#505bbd";
    // document.getElementById("btn-1").style.color = "#fff";
    document.getElementById("btn-1").innerHTML = `deixar o fundo anil`;
    document.getElementById("btn-1").setAttribute("onclick", "botaoAnil()");

    document.getElementById("btn-2").removeAttribute("disabled");
}

function botaoAnil(){
    document.querySelector("body").style.backgroundColor = "#505bbd";
    // document.querySelector("h2").style.color = "#fff"

    document.getElementById("btn-1").style.backgroundColor = "#aa37c6";
    // document.getElementById("btn-1").style.color = "#fff";
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
    document.querySelector("body").style.backgroundColor = "#f2ab91";
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
    // document.querySelector("h1").style.color = "#fff"

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