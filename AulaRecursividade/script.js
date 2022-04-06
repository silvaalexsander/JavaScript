/*function contador(min, max){
    document.write(min + '<br>')
    if(min < max){
        contador(++min, max)//passamos o incrimento na frente
    }
}

contador(0, 13)*///recursão contador



/*function fatorial(n){
    if(n == 1){
        return n
    }
    return n * fatorial(n - 1)
}
document.write(fatorial(10))*///recursão fatorial

window.addEventListener('load', inicia)
var obj = document.getElementById('dv1')
var ang = 0
var anima

function inicia(){
    var btInicia = document.getElementById('start')
    btInicia.addEventListener('click', start)
    var btParar = document.getElementById('stop')
    btParar.addEventListener('click', parar)
}

function start(){
    gira()
}

function parar(){
    cancelAnimationFrame(anima)
}

function gira(){
    obj.style.transform = 'rotate('+ang+'deg)'
    ang = ang + 2
    if(ang > 360){
        ang = 0
    } 
    anima = requestAnimationFrame(gira)
}

