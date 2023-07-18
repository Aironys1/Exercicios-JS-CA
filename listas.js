// Arrays ou listas

let lista = [10,25,100,"Seja bem vindo",22.15, [0.2,5,10]]

console.log(lista.sort()) // Aqui a lista de forma ordernada
console.log(lista[5]) // Pegando um indice especifico

// Vamos usar o for para pecorerer o array
console.clear()

console.log("Vamos usar o for para pecorerer o array")
for (const elemento of lista) {
    console.log( typeof elemento, elemento) // Verificando o tipo e exibindo a lista de forma ordernada
    
}