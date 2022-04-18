var texto = document.getElementById('txt').innerHTML

var res = texto.indexOf('J') // retorna a primeira posição (para o ultimo usa o lastIndexOf) da variavel passada, é caseSensitive, se == -1 entáo náo encontrou
document.write('IndexOf - ' + res)

var texto1 = texto
var lcp = texto.localeCompare(texto1)//compara as duas strings, se forem iguais retorna 0 se não retorna -1
if(lcp == 0){
    document.write('<br>LocaleCompare - São iguais')
}
else{
    document.write('<br>LocaleCompare - São diferentes')
}

var sli = texto.slice(3, 25)//retorna a string dentro da fatia repassada
document.write('<br>Slice - ' + sli)

var spl = texto.split(' ')//separa a string, podemos passar o espaço ' ' e ele vai transformar cada palavra em um elemento
document.write('<br>Split - ' + spl[0])

var up = texto.toUpperCase()//para maiusculo
document.write('<br>UpperCase - ' + up)

var dw = texto.toLowerCase()//para maiusculo
document.write('<br>LowerCase - ' + dw)