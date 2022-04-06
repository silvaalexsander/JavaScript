var ndt = new Date()
var data = new Date()
ndt.setFullYear(data.getFullYear()+4)//aumentando 4 anos ao atual
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()
document.write(`${dia}/${mes + 1}/${ano} <br>`)//exibindo data e dia atual

var dia2 = ndt.getFullYear()
document.write(dia2)
