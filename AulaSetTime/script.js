//setTimeOut faz a chamada da função callback no tempo especificado e encerra
//setInterval repete a chamada da função enquanto o intervalo existir
//clearInterval() limpa a chamada

window.addEventListener('load', addEventos)

function mudaCor(){
    var obj = document.getElementById('dv1')
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    obj.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"
}

var tmp = setInterval()
//var tmp = setTimeout(mudaCor, 3000)//recebe a função e o tempo
function iniciar(){
    tmp = setInterval(mudaCor, 100)
}
 
function parar(){
    clearInterval(tmp)
}

function addEventos(){
    document.getElementById('btIniciar').addEventListener('click', iniciar)
    document.getElementById('btParar').addEventListener('click', parar)
}