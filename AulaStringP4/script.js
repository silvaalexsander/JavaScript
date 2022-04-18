var texto = document.getElementById('txt').innerHTML

var num = 255

//metodo toString(), faz conversões de bases
var res = num.toString()
var bin = num.toString(2)
var oct = num.toString(8)
var hex = num.toString(16)
document.write('Decimal - ' + res)
document.write('<br>Binário - ' + bin)
document.write('<br>Octal - ' + oct)
document.write('<br>Hexa - ' + hex)


//trim - retira espaços do inicio e do fim
var tri = texto.trim()
document.write('<br>Trim - ' + tri)

var t = "Hoje é \'dia de'\ sei la o que"
document.write('<br>Cacarteres - ' + t)//é necessário colocar barra invertida

