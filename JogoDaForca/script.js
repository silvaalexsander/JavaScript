//bibliotecas de palavras dispooniveis
var biblioteca = ['javascript', 'curso', 'computador', 'trasnsporte',
'livraria', 'tecnologia', 'controle', 'churrasco', 'brasileiro',
'carro', 'monitor', 'brinquedo', 'youtube', 'escola', 'carnaval', 'teclado',
'guitarra', 'bateria', 'chinelo', 'garrafa', 'helicoptero', 'mouse',
'violao', 'internet', 'desenvolvedor', 'amigo', 'perna', 'peito',
'cadeira', 'churrasqueira']

//inicio de variaveis do programa
var qtde = biblioteca.length - 1 //quantidade de palavras
var pos = Math.round(Math.random() * qtde) //recebendo um numero aleatorio dentro do range de biblioteca
var palavra = biblioteca[pos] //recebendo uma palavra de detro de biblioteca
var tam = palavra.length //recebendo o tamanho da palavra
var cxLetras = [] //caixa de letras para receber letras jogadas
var acertos //numero de acertos
var errosMax = 7 //maximo de erros
var erros = 0 //vezes que ja errou
var desenhos = 0 
var acertou = false
var jogando = false 
var jog

window.addEventListener('load', inicia)

function inicia(){
    jogando = true
    jog = document.getElementById('letraJ')
    jog.value = ''
    jog.focus()
    acertos = 0
    erros = 0
    acertou =false 
    document.getElementById('dvletrasdigitadas').innerHTML = 'Letras Digitadas: '
    pos = Math.round(Math.random() * qtde)
    palavra = biblioteca[pos]
    tam = palavra.length
    defineLetras(tam)
    document.getElementById('dvmsg').innerHTML = ''
    desenhos[1] = document.getElementById('cabeca')
    desenhos[2] = document.getElementById('corpo')
    desenhos[3] = document.getElementById('bracoE')
    desenhos[4] = document.getElementById('bracoD')
    desenhos[5] = document.getElementById('pernaE')
    desenhos[6] = document.getElementById('pernaD')
    document.getElementById('cabeca').src = '#'
    for (var i = 1; i < 7; i++){
        desenhos[i].style.display = 'none'
    }
}

function defineLetras(l){
    var obj
    for(var i = 0; i < 20;i++){
        obj = document.getElementById('letra' + i).value = ''
        obj = document.getElementById('letra' + i).style.display = 'none'
    }
    for(var i = 0; i < l; i++){
        obj = document.getElementById('letra' + i).style.display = 'inline-block'
    }
}

function jogar(){
    jog.focus()
    if(jog.value == ''){
        alert('Digite uma letra')
    }else{
        if(jogando){
            var obj
            var letraTmp
            var letra 
            var pesq
            letra =jog.value //recebe a letra que o usuario informou
            acertou = false
            pesq = palavra.match(letra)
            jog.value = ''
            while(pesq != null){
                letraTmp = palavra.search(letra)//letra temporaria recebe o indice da primeira ocorrencia da letra informada
                obj = document.getElementById('letra' + letraTmp).value = letra 
                palavra = palavra.replace(letra, '0')//substititui a primeira ocorrencia da letra indicada por 0 dentro da strings
                acertos++
                pesq = palavra.match(letra)
                acertou = true
            }
            if(!acertou){
                document.getElementById('dvletrasdigitadas').innerHTML+=letra.toUpperCase()
                erros++
                if(erros < 7){
                    desenhos[erros].style.display = 'block'
                }else{
                    alert('Perdeu')
                    jogando = false
                }
            }
            if(acertos == tam){
                alert('GANHOU')
                jogando = false
            }
        }
    }
}
function dica(){
    alert(palavra)
}
