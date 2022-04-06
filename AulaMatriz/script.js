var mochila = new Array()
var item1 = ['Corda', 2], item2 = ['Caneta', 3], item3 = ['Lapis', 5]
mochila.push(item1)
mochila.push(item2)
mochila.push(item3)


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
       document.write(mochila[i][j] + " ")
    }
    document.write("<br>")
    
}