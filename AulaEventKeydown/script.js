var px = 0//variavel para passar o deslocamento horizontal. Negativo para esquerda, positivo para a direita
var py = 0//variavel para passar o descolamento verticfal. Negativo para cima, positivo para baixo
/*document.addEventListener('keydown', function(event){
    var obj = document.getElementById('dv1')
    var tecla = event.keyCode//recebendo o codigo da tecla pressionada
    //37 esquerda
    //38 cima
    //39 direta
    //40 baixo
   
    if(tecla == 37){
        px  -= 10//descolando para a esquerda em 10 pixeis
        obj.style.left = px + 'px'
       
    }
    else if(tecla == 38){
        py -= 10//deslocando para cima em 10 pixeis
        obj.style.top = py + 'px'
    }
    else if(tecla == 39){
        px  += 10//deslocando para a direita em 10 px
        obj.style.left = px + 'px'
    }
    else if(tecla == 40){
        py += 10//deslocando para baixo em 10 pixeis
        obj.style.top = py + 'px'
    }
});*///função ANONIMA para fazer uma div deslocar

window.addEventListener('load', iniciar)

function addclique(){
    document.addEventListener('keydown', move)
    obj.style.backgroundColor = 'blue'
}

function iniciar(){
    obj = document.getElementById('dv1')
    obj.addEventListener('click', addclique)
}

function move(){
    var tecla = event.keyCode
    if(tecla == 37){
        px  -= 10//descolando para a esquerda em 10 pixeis
        obj.style.left = px + 'px'
    
    }
    else if(tecla == 38){
        py -= 10//deslocando para cima em 10 pixeis
        obj.style.top = py + 'px'
    }
    else if(tecla == 39){
        px  += 10//deslocando para a direita em 10 px
        obj.style.left = px + 'px'
    }
    else if(tecla == 40){
        py += 10//deslocando para baixo em 10 pixeis
        obj.style.top = py + 'px'
    }
    else if(tecla == 13){//13 é a tecla ENTER
        alert('Evento KeyDown removido')
        document.removeEventListener('keydown', move)//destruindo o evento kewdown
        obj.style.backgroundColor = 'white'
    } 
}
