var texto = document.getElementById('txt').innerHTML

var res = texto.search(/aula/i)//modificador g não funciona
document.write(res)//indica a primeira posição em que posição começa a string passada, nesse caso, 4

var reply = texto.replace(/curso/ig, "aula")//com modificador i, troca apenas a primeira ocorrencia, com modificador ig, troca todas as ocorrencias
document.write('<br>' + reply)

var ch = texto.charAt(1)//charAt indica o caracetere que esta na posição informada
document.write('<br>' + ch)

var cch = texto.charCodeAt(0)//indica o código do caractere que esta na posição infomrada
document.write('<br>' + cch)

document.write('<br>' + String.fromCharCode(67))//retorna um caracetere com base no codigo

var txt2 = ' Curso de Java POO'
var txt3 = ' Curso de C#'
res = texto.concat(txt2, txt3)//concatenação de strings
document.write('<br>' + res)