var tabela = document.getElementById('tbNotas')
var nota
for(let i = 1; i < tabela.rows.length; i++){
    nota = parseFloat(tabela.rows[i].cells[1].innerHTML) + parseFloat(tabela.rows[i].cells[2].innerHTML)
    tabela.rows[i].cells[3].innerHTML = nota
}

var n = []
n[0] = document.getElementById('n1')
n[1] = document.getElementById('n2')
n[2] = document.getElementById('n3')
n[3] = document.getElementById('n4')

for(let i = 0; i < n.length; i++){
    if(n[i].innerHTML <= 70){
        n[i].style.color = 'red'
        n[i].style.fontWeight = 'bold'
    }
    else{
        n[i].style.color = 'blue'
        n[i].style.fontWeight = 'bold'
    }
}