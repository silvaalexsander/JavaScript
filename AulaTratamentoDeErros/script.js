var num = 10

try {
    var a = prompt('Digite um valor')
    if(a > 10){
        throw new Error ('Digite um valor menor ou igual a 10<br>')//gera valor
    }
    else{
       //10 document.write(a)
    }
        
} catch (e) {
 document.write(e)   
 //console.log('Erro')//console.logo deixa a msg de erro no log, não fica explicito ao usuario
 a = 10//fazendo a variavel receber o maior numero permitido
}finally{
    document.write(a +  ' Fim do programa')
}