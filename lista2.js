console.clear();
const listaNumeros = [92,50,22,15,7,44,88,97];

// Qual a soma dos números?

let soma = 0;

for(let i = 0; i < listaNumeros.length; i++){
    soma += listaNumeros[i];
}


console.log(`A soma dos números: ${soma}`)



// Outra forma de obter o mesmo resultado

let acumulador = 0;



for (const numero of listaNumeros){
    acumulador += numero;
}

console.log(`A soma dos números usando a forma do for of é: ${acumulador}`);

console.clear();

// Qual o maior numero e menor numero?

let maior = listaNumeros[0];
let menor = listaNumeros[0];

for(let i = 0; i < listaNumeros.length; i++){
    if(listaNumeros[i] > maior){
        maior = listaNumeros[i];
    }
    if(listaNumeros[i] < menor){
        menor = listaNumeros[i];
    }
}

console.log(`O maior número é: ${maior}`);

console.log(`O menor número é: ${menor}`);

console.clear();
// Outra forma de fazer 

let menorNumero;
let maiorNumero;
for(const elemento of listaNumeros){
    if(menorNumero === undefined){
        menorNumero = elemento;
        maiorNumero = elemento;
    } else {
        if (elemento < menorNumero) {
            menorNumero = elemento;
        }
        else{
            if(elemento > maiorNumero){
                maiorNumero = elemento;
            }
        }
    }

}
console.log(`O menor número é ${menorNumero}`)

console.log(`O maior número é ${maiorNumero}`)