const palavra = "Aironys";

let numeroVogais = 0;
let consoantes = 0;

// Agora vamos saber quanta vogais temos nas palavras

for (const letra of palavra) {
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u" ||
    letra == "A" ||
    letra == "E" ||
    letra == "I" ||
    letra == "O" ||
    letra == "U"
  ) {
    numeroVogais++;
  } else{
    consoantes++;
  }
}
console.log(`Numero de Vogais: ${numeroVogais}`);

console.log(`Numero de Consoantes: ${consoantes}`);
