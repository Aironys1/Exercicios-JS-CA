// Queremos saber quantos numeros entre 1 e 1000 são multriplos de 33
let resposta = 1;
let numero = 1;

while (numero <= 1000) {
    if (numero % 33 ===0){
        resposta+=1;
    }
    numero += 1;
}
console.log("A resposta é:",resposta);