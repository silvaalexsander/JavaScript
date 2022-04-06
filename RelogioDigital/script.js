window.addEventListener('load', relogio)

function relogio(){
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    if(hora < 10){
        hora = "0" + hora 
    }
    if(minuto < 10){
        minuto = "0" + minuto 
    }
    if(segundo < 10){
        segundo = "0" + segundo
    }
    var horas = hora + ':' + minuto + ":" + segundo
    var div = document.getElementById('relogio')
    if(segundo == 0){
        div.style.color = 'white'
    }
    else if(segundo != 0){
        div.style.color = 'rgb(33, 194, 59)'
    }
    div.value = horas
}

setInterval(relogio, 1000)