let tempo = 0;

function lerTempo(){
    tempo = document.getElementById("digitarTempo").value;
    document.getElementById("cronometro").style.display = "block";
    document.getElementById("cronometro").innerHTML = tempo

    console.log(tempo)
    do {
        tempo--;
        console.log(tempo)
        document.getElementById("cronometro").innerHTML = tempo;
    }
    while(tempo > 0)
}