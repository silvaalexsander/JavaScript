var imgs = []
var slider
var imgAtual
var maxImg
var tmp
var tempoTroca
var vTempo
var vBarra
window.addEventListener('load', inicia)

function inicia(){//essa função será chamada assim que ocorrer o LOAD no BODY. Nela iniciamos o precarregament e algumas variaveis e chamamos o carregaImg e a anima, para começar a executar
    preCarregamento()
    imgAtual = 0
    maxImg = imgs.length - 1
    slider = document.getElementById('slider')
    vBarra = document.getElementById('dvBarra')
    carregarImg(imgAtual)
    tempoTroca = 0
    anima()
}


function preCarregamento(){//Essa função faz o carregamento das imagens para dentro de um vetor
    var s = 1
    for(let i = 0; i < 5; i++){
        imgs[i] = new Image()
        imgs[i].src = 's'+s+'.jpg'
        s++
    }
}

function carregarImg(img){//essa função recebe um img que é um inteiro referenciando a qual imagem do vetor imgs iremos colocar no fundo
    slider.style.backgroundImage = "url('"+imgs[img].src+"')"
}

function troca(dir){//função que faz a troca das imagens, recebe dir como parametro para trocar as imagens de acordo com o clique no botão, a imgAtual é atualizada de acordo com o clique e é passada para a função carregaImg
    tempoTroca = 0
    imgAtual += dir
    if(imgAtual >= maxImg){
        imgAtual = 0
    }
    else if(imgAtual < 0){
        imgAtual = 3
    }
    carregarImg(imgAtual)
}

function anima(){//função que faz a animação atraves do requestAnimationFrame(anima), uma especie de recursividade
    tempoTroca++//tempo da troca é incrementado
    if(tempoTroca >= 200){//se chegar a 200, o tempo zera e troca e chama a função troca passando 1 como parametro para ir a imagem adiante
        tempoTroca = 0
        troca(1)
    }
    vTempo = tempoTroca / 2//variavel tempo recebe o tempo de troca dividio por 2 que é o tempo de troca dividido por 100x ele mesmo pois 100 é o tamanho da porcentagem da barra
    vBarra.style.width = vTempo+'%'//incrementando na barra
    window.requestAnimationFrame(anima)
}


