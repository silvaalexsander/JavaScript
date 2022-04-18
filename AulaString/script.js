//esse metodo faz uma busca numa string por um texto especifico
//faz a busca pelo texto passado, e retorna a quantidade encontrada, o elemento, e tbm em forma de array

var texto =  document.getElementById('txt').innerHTML

//var res = texto.match('c') 
//var res = texto.match(/Cursos/g) //ira informar todas ocorrencias informadas *caseSensitive*
//var res = texto.match(/javascript/ig) //retorna quantas ocorrencias independente de caseSensitive
//alert(res)//retorna a palavra/caractere encontrada
/*for (let i = 0; i < res.length; i++) {
    document.write(res[i] + '<br>')
    
}*/
///alert(res.length)//retorna quantas foram encontradas
//var res = texto.match(/[oa]/ig)//retorna quantas letras 'o' e 'a' existem
var res = texto.match(/[^oa]/ig)//retorna o numero as letras EXCETO 'o' e 'a' existem
var res = texto.match(/[a-g]/ig)//retorna o numero as letras ENTRE 'o' e 'a' existem
alert(res.length)

/* META CARACTERES

\w - PESQUISA SOMENTE POR LETRAS E NUMERAIS, IGNORANDO ESPAÇOS, TRAÇOS, ETC
\W - PESQUISA POR CARACTERES DIFERENTES DE NUMEROS E LETRAS
\d - PESQUISA POR NUMERAIS
\D - PESQUISA POR TODOS OS CARACTERES QUE NÃO SÃO NUMERIAS
\s - PESQUISA PELOS ESPAÇOS
\S - PESQUISA POR TODOS OS CARACTERES QUE NÃO SEJAM ESPAÇOS
\b - PESUISA POR OCORRENCIA QUE INICIEM OU TERMINEM COM UMA LETRA OU NUMERO, CADA OCORRENCIA QUE INICIAR E TERMINA COM UM NUMERO OU LETRA CONTA COMO 2
/B - PESQUISA POR OCORRENCIA QUE NÃO INICIEM OU TERMINEM POR LETRA OU NÚMERO
\O - PROCURA POR CARACTERES NULOS
\N - PESQUIS POR QUEBRAS DE LINHAS
\r - PESQUISA POR CARACTERE DE 'RETORNO DE CARRO' ENTER
\t - PESQUISA POR CARACATERE DE TABULAÇÃO TAB
\v - PESQUISA POR CARACATERE DE TABULAÇÃO VERTICAL
s+ - PESQUISA POR PALAVRAS QUE CONTENHAM UM OU MAIS LETRAS 'S'

*/