//console.log() Mostra uma informação no console
console.log("Olá, Mundo!");
console.log("Karla Rafaela");

console.log(typeof "Olá,mundo!"); //sting
console.log(typeof 18); //number
console.log(typeof 10.5); //number
console.log(typeof true); // boolean
console.log(typeof false); //boolean

//váriavel
//const não pode ter seu valor alterado o programa
const nome = "Karla";
console.log(nome);

//let pode ter seu valor alterado durante o programa
let idade = 18;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + " anos. ");

idade = 19;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`);



//exercicio - variavel 2

const nome2 = "Maria";
console.log(nome2)

let peso = 50;
console.log(peso);

console.log("Olá " + nome + ", que tem " + peso + " kilos. ");

peso = 60;
console.log(peso);

console.log(`Olá ${nome}, que tem ${peso} kilos.`);
 

//Métodos de string
const texto = "JavaScript"

//conta quantos caracteres a string tem
console.log(texto.length)

//altera todas as letras para maíuscula
console.log(texto.toUpperCase())

//altera todas as letras para minúsculo
console.log(texto.toLowerCase())

const nome_completo = "Karla Rafaela de Souza Farias"

console.log(nome_completo.includes ("Farias"))//true

console.log(10>5)//true
console.log(10<5)//false
console.log(10 >= 10)//true
console.log(10 <= 5)//false
console.log("10" == 10)//true
console.log("10" === 10)//false
console.log(10 !== 5)//true

const idadePessoa = 18

console.log(idadePessoa > 19)//false
console.log(idadePessoa > 17)//true

const sobrenome = "Farias"

const renome = "farias"

console.log("Farias" == "farias")


//coletamos a idade da pessoa
let pessoaIdade = 19;
//verificar se a idade é maior ou igual a 18
if(pessoaIdade >= 18){
   //se maior ou igual a 18 então ela é maior de idade
    console.log("Já Pode Ser Preso haha!")
}else{
// senão, então ela é menor de idade
console.log("Não vai pra balada!😂😂😂")
}


//coletamos a idade da pessoa
let idadeVotacao = 16
//verificar se a idade da pessoa é maior que 70
if (idadeVotacao > 70) {
    //senão se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
} else if (idadeVotacao >= 16){
    //senão se a idade da pessoa for maior ou igual  16
    console.log("Você não é obrigado a votar, mas caso queira pode!")
} else {
    //senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}

//EXERCICIO 1 - Aprovação escolar

let mediaNota = 7
// Se a média for maior ou igual a 7, informe "Aprovado"
if( mediaNota >= 7 ){
    console.log("Aprovado")

} else {
    //Se Caso contrário, informe "Reprovado"
    console.log("Reprovado")
    console.log("houve empate")
} else {
    }



//EXERCICIO 2 - Comparação de dois números

let numero1 = 9
let numero2 = 3

if(numero1 = 9 > 3 ){
console.log = ("O primeiro é maior")
} else if ( numero2 = 9 > 3 ){
    console.log = ("O segundo é maior")
} else {
        console.log = ("Houve empate")
    }


