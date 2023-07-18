const deposito = 500;
const objetivo = 100000;
const rendimentoAnual = 0.10;

let conta = 0;
let meses = 0;

// Todo ano ela rende 10%.
// Todo mêses fazer um depósito

// Quantos meses demora para chegar em 100.000 Reais

while (conta < objetivo) {
  conta += deposito;
  conta += conta * rendimentoAnual/12; // Aqui temos um rendimento mensal
  meses+=1; // Aqui acresentamos um mes cada interação do while, enquanto o objetivo for menor que 100 mil reais
}

console.log(`Demorou ${meses} meses.`);
console.log(`Demorou ${meses/12} anos.`);



