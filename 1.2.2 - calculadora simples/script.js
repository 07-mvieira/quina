let n1 = 0;
let n2 = 0;
let res = 0;

function lerNumeroUm(){
    const botaoN1 = document.getElementById("numeroUmBotao");
    botaoN1.setAttribute('disabled', true);

    n1 = document.getElementById("numeroUm").value;
    document.getElementById("numeroDoisCaixa").style.display = "block";
};

function lerNumeroDois(){
    const botaoN2 = document.getElementById("numeroDoisBotao");
    botaoN2.setAttribute('disabled', true);

    n2 = document.getElementById("numeroDois").value;
    document.getElementById("ops").style.display = "block";
}

function final(){
    document.getElementById("calculo").style.display = "none"
    document.getElementById("resCaixa").style.display = "block";
}

function adi(){
    console.log(`${n1}, ${n2}`);
    console.log(n1 + n2);

    let n1 = parseFloat(document.getElementById("numeroUm").value);
    let n2 = parseFloat(document.getElementById("numeroDois").value);

    res = n1 + n2;
    // essa coisa deu nan a primeira vez q eu fiz e eu chega hiperventilei 
    // *****NaN***** em times negrito é a coisa mais assustadora q existe
    // na segunda vez 3 + 3 deu 33.
    document.getElementById("resultado").innerHTML = `${res}`
}

function sub(){
    let res = n1 - n2;
    document.getElementById("resultado").innerHTML = `${res}`
}

function mult(){
    let res = n1 * n2;
    document.getElementById("resultado").innerHTML = `${res}`
}

function div(){
    let res = n1 / n2;
    document.getElementById("resultado").innerHTML = `${res}`
}

function pot(){
    let res = n1 ** n2;
    document.getElementById("resultado").innerHTML = `${res}`
}

function raiz(){
    let res = n1 ** (1 / n2);
    document.getElementById("resultado").innerHTML = `${res}`
}

function mod(){
    let res = n1 % n2;
    document.getElementById("resultado").innerHTML = `${res}`;
}

function purge(){
    window.location.reload(true)
}