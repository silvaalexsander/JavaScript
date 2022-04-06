function exibir(){
    //declarando um ARRAY
    var cor = new Array() //os dois jeitos funcionam, vamos usar o segundo
    var cor = []
    cor.push(' Verde', ' Amarelo', ' Azul', ' Vermelho')//metodo posh insere elementos no final do array
    //document.write(cor[2])//imprimindo a cor 2

    var itens = ['Faca', 'Canivete', 'Arma', 'Munição', 'Agua']
    itens.push('Lança')//insere no final do array
    itens.unshift('Pedra')//insere no inicio do array
    document.write(itens + "<br>")
    itens.shift()//remove elementos do inicio
    document.write(itens + "<br>")
    itens.pop()//remove elementos do final 
    document.write(itens+ "<br>")
    itens.splice(0,1)//remove um item, a partir do indice 4 remove 1 elemento
    document.write(itens + "<br>")
    itens.reverse()//inverte a ordem do array
    document.write(itens + "<br>")
    itens.sort()//organiza por ordem alfabetica
    document.write(itens + "<br>")

    pos = itens.indexOf('Arma')
    if(pos < 0){
        alert('Item inexistente')
    }
    else{
        itens.splice(pos, 1)
        document.write(itens + "<br>")
    }

    var mochila = ["celular", "carteira", "dinheiro"]
    mochila.shift()
    var mochila2 = ["caneta", "caderno", "lapiseira"]
    var mochila3 = []
    mochila3 = mochila.concat(mochila2)//concatenando dois arrays
    document.write(mochila3 + "<br>")
    document.write(`Tamanho mochila 1 = ${mochila.length}<br>Tamanho mochila 2 = ${mochila2.length}<br>Tamanho mochila 3 = ${mochila3.length}`)

    /*var mochila = []
    for (let i = 0; i < 3; i++) {
        var ale = Math.floor(Math.random() * 5)
        mochila[i] = itens[ale]    
    }*/

}