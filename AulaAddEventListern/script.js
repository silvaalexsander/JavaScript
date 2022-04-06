function addEventos(){//função que carrega todos os eventos da pagina
   var a =  document.getElementById('dv1')
    a.addEventListener('click', msg)
    a.addEventListener('mouseover', function(event){//função anonima
        mudaCor(a, 'green')//passando o objeto e a cor
    })
    a.addEventListener('mouseout', function(event){//função anonima
        mudaCor(a, 'white')//passando o objeto e a cor
    })

    var b = document.getElementById('dv2')
    b.addEventListener('mouseover', function(event){//função anonima
        mudaCor(b, 'red')//passando o objeto e a cor
    })
    b.addEventListener('mouseout', function(event){//função anonima
        mudaCor(b, 'white')//passando o objeto e a cor
    })
}

window.addEventListener('load', addEventos)//chama a função load(que carrega a pagina inicial) e nisso ja passa todos os carregamentos de eventos

function msg(){
    alert('Ola')
}

function mudaCor(obj, cor){//recebendo o objeto e a cor
     obj.style.backgroundColor = cor   
}

