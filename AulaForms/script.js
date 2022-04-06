//var fm = document.forms.item(0).id outra forma de fazer o mesmo
//var fm = document.forms.namedItem('curso1').id mais uma forma
//var fm = document.forms[0].id;//recebe os formularios HTML, aponta para o formulario não para os elementos
//var fm = document.forms[0].elements[0].value//retorna o primeiro elemnto do primeiro formulario
//document.write(fm)// = 1, que é UM formulario no HTML

var f1 = document.forms[0]
var el = f1.elements//captura todos os elemntos do formulario passado

el[0].style.backgroundColor = "#ddd"
el[0].value = "CFB Cursos"

document.write(el)

function clicou(){
    var nome = document.getElementById('teste').value
    var senha = document.getElementById('senha').value

    alert(`Nome: ${nome} <br> Senha: ${senha}`)
}