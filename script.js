    const motorista = {
        idade: 18,
        temCNH: true,
        temCarro: false
    }

    console.log(motorista)

    motorista.idade += 1;
    motorista.temCNH = false;
    motorista.temCarro = true;

    console.log(motorista)

//Laço de repetição
    for(let contador = 0; contador <= 1000; contador++){
        console.log(contador)
    }

//02 - Tabuada
    let numero = 5;

    for(let contador = 1; contador <= 10; contador++){
    console.log(`${contador} x ${numero} = ${contador * numero}` )
    }

    //while
    let contador = 1;
    let numeroWhile = 5;
    while(contador <= 10){
     console.log(contador * numeroWhile)
     contador++;
    }

//03 - contagem Regressiva

// let number = 0;

// while(number >= 0){
//         console.log(`while: ${number}`);
//         number -= 2
// }


//  let number2 = 20;

// do{
//      console.log(`do while: ${number2}`);
//      number -= 2
// } while(number2 >= 0);



//04 - CONTAGEM REGRESSIVA 

let numberi= 10;

do{
    console.log(numberi);
     numberi--;
} while(numberi >= 1);

console.log("Fim da contagem");


//LISTAS
const frutas = ["Maçã", "Banana", "Uva", "Laranja"];
frutas[0] = "Pêra";

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[2]);

console.log(frutas.length);

frutas.push("Manga", "Mexerica");

console.log(frutas)

frutas.pop()

console.log(frutas)

//ORDEM ALFABETICA
frutas.sort()
console.log(frutas)

//FUNÇÕES
function somar(numero1, numero2){
    return numero1 + numero2;
//  console.log(`A soma dos números é ${numero1 + numero2}`)
}
const soma = somar(1,1);
console.log(soma);

// somar(1,1);
// somar(6,7);

function dividir(numero1, numero2){
    console.log(`${numero1}/ ${numero2} = ${numero1/numero2}`)
}
dividir(20,4)


//01 Crie uma lista chamada jogos com 3 jogos. Adicione mais 2 jogos ao final da lista e exiba o resultado no console.

const jogos = ["Pou", "Minecreft", "Roblox"];
jogos[2] = "subsurf, sudoku" ;

console.log(Adicione);
