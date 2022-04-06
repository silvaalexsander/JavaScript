var elementos = document.querySelectorAll('.titulo')
for (let index = 0; index < elementos.length; index++) {
    document.write(elementos[index].innerHTML + "<br>")
    
}//retornando todos elementos que contem a classe titulo

var title = document.querySelectorAll('p.titulo')
for (let index = 0; index < title.length; index++) {
     document.write('<br>' + title[index].innerHTML)//retorna todos os PARAGRAFOS com a tag titulo
    
}

var divs = document.querySelectorAll('div > p')
for (let index = 0; index < divs.length; index++) {
     document.write(divs[index].style.color = 'green')//passando para verd todos os PARAGRAFOS dentro de uma DIV
}

var divs2 = document.querySelectorAll('div.quadro > p')
for (let index = 0; index < divs2.length; index++) {
     document.write(divs2[index].style.color = 'yellow')//passando para amarelo todos os PARAGRAFOS dentro de uma DIV com a classe QUADRO
}

var elementos2 = document.querySelectorAll('p, h1')//selecionando duas tags