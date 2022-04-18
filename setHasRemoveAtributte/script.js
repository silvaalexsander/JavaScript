var obj = document.getElementById('carro')

function trocaCarro(op){
    if(op ==1 ){
        obj.setAttribute('class', 'c1')
    }
    else if(op == 2){
        obj.setAttribute('class', 'c2')
    }
    else if(op == 3){
        obj.setAttribute('class', 'c3')
    }
}

function remove(){
    if(obj.hasAttribute('class')){
        obj.removeAttribute('class')
        alert('Imagem Removida')
    }
    else{
        alert('Não há imagens a remover')
    }

}