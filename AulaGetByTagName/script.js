//getElementsByTagNames
var tagsP = document.getElementsByTagName('p')//para pegar todas as tags da pagina, trocamos o 'p' para '*'
for (let index = 0; index < tagsP.length; index++) {
    tagsP[index].style.color = "blue"
}
document.write("<hr>" + tagsP[0].innerHTML)
