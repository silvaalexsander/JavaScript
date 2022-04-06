/*function soma(n1, n2){
    var res = n1 + n2
    document.write(res + '<br>')
}
soma(12,35)
soma(1,2)
soma(3,78)*/

/*function soma(n1, n2){
    return n1 + n2
}

var a = soma(4,5)
document.write(a)*/

var numeros = Array(10, 2, 8, 9, 7, 6, 9)
function media(nums){
    var soma = 0
    for (let i = 0; i < nums.length; i++) {
        soma += nums[i]        
    }
    return soma / nums.length
}

document.write(media(numeros))