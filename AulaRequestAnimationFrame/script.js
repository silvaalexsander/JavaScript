var jog
var vel
var ydx
var dy
var px
var py
var anima
var btIniciar 
var btParar

function inicia(){
    vel = 5
    dx = 1//inicia movimentando para direita
    dy = 0
    px = 0
    py = 0
    jog = document.getElementById('jogador')
    jog.addEventListener('click', game)
    btParar = document.getElementById('parar')
    btParar.addEventListener('click', btnParar)
    btIniciar = document.getElementById('inicia')
    btIniciar.addEventListener('click', btnIniciar)
    
}

function btnIniciar() {
    game()
}

function btnParar(){
    cancelAnimationFrame(anima)
}

function game(){
    px += dx * vel
    py += dx * vel
    jog.style.left = px + 'px'
    jog.style.top = py + 'px'
    if(px > 700){
        dx = -1
    }
    else if(px < 0){
        dx = 1
    }
    if(py > 800){
        dy = -1
    }
    else if(py < 0){
        dy = 1
    }
    anima = requestAnimationFrame(game)
}


window.addEventListener('load', inicia)