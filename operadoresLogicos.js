// MEIA - menor de idade OU idosa OU (Adulta E tiver carteirinha)
const idade = 32;
const temCarteirinha = true;
const ehAdulta = idade >=18 && idade <=60;

if (idade <18 || idade > 60 || (ehAdulta && temCarteirinha)){
    console.log('MEIA ENTRADA');
} else{
    console.log('PAGA INTEGRAL');
}

console.log('Vai pagar meia pois o cliente tem carteirinha');