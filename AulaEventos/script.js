var a = document.getElementById('dv1')
function clicar(){
    a.innerHTML = 'Ola'
}

function mousePresence(a, cor){
    a.style.backgroundColor = cor
}

function mudaPosition(obj){
    obj.style.position = 'absolute'
    obj.style.left = Math.random() * 500 + 'px' //passando posições aleatorias a esquerda para o botão
    obj.style.top = Math.random() * 500 + 'px'
}

function ola(){
    var data  = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora < 12){
        alert('Bom dia')
    }
    else if(hora < 19){
        alert('Boa tarde')
    }
    else if(hora >= 19){
        alert('Boa noite')
    }
}