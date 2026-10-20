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

let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

if(idadeDirigir >= 18 && temCNH == true && temCarro == true){
    console.log("Você Pode dirigir!")
}else{
    console.log("Você Não pode dirigir!")
}

let ehProfessor = false;
let ehAluno = false;

if(ehProfessor == true || ehAluno == true){
    console.log("Vocêtem direito a meia-entrada!")
}else{
    console.log("Você não tem direito a meia-entrada!")
}

//ANOTAÇÕES----------------
// IF = SE
// ELSE = SENÃO
// && = e
// ||= ou



//EXERCICIO 1 - Aprovação escolar
let media = 8;
if (media >= 7){
    console.log("Aprovado");
}else {
    console.log("Reprovado");
}


//EXERCICIO 2 - Comparação de dois números
let numero1 = 9;
let numero2 = 3;

if (numero1 = 9 > 3 ){
     console.log = ("O primeiro é maior");
} else if ( numero2 = 9 > 3 ){
     console.log = ("O segundo é maior");
} else {
     console.log = ("Houve empate");
    }

//EXERCICIO 3 - Verificação de senha
 let senha = prompt("Digite a senha:");

 if(senha == "senai123") {
    alert("Acesso autorizado");
 }else {
    alert("Senha incorreta");
 }

 //PARTE 2 - MULTIPLOS CAMINHOS

 //EXERCICIO 4 - Classificação de temperatura
 const temperatura = 29;
 
 if (temperatura < 18) {
    console.log("frio");
 }else if (temperatura <= 27) {
    console.log ("Agradável");
 }else {
    console.log ("Quente");
 }

 //EXERCICIO 5 - Classificação de nota
 let nota = 0;
 if(nota >= 9) {
     console.log("Excelente");
}else if (nota >= 7) {
    console.log("Bom");
}else if (nota >= 5) {
    console.log("Regular");   
}else{
    console.log ("Insuficiente");
}

//EXERCICIO 6 - Dia da semana
const semana = 7;

if (semana == 1) {
     console.log("Domingo");
}else if(semana == 2) {
     console.log("Segunda");
}else if (semana == 3) {
     console.log("Terça");
}else if (semana == 4) {
     console.log("Quarta");
}else if (semana == 5) {
     console.log("Quinta");
}else if (semana == 6) {
     console.log("Sexta");
}else if (semana == 7) {
     console.log("Sabádo");
}else {
     console.log("Dia Inválido");
}

//01 — Operador E (&&)
let numero = 28;

    if(numero > 10 && numero < 50){
        console.log("O numero esta no intervalo entre 10 e 50");
    }else{
        console.log("O numero esta fora o intervalo entre 10 e 50");
    }


//02 - Elegibilidade para estágio
let Candidato = 20
if (Candidato > 16 && Candidato < 24) {
     console.log("NÃO pode fazer o estágio.");
} else {
        console.log("PODE fazer o estágio.");
}

//03 - Frete grátis
let valorCompra = 152;
let ehassinante = true;

if(valorCompra >= 200 || ehassinante == true){
    console.log("Você tem direito a frete grátis!");
}else{
    console.log("Você não tem direito a frete grátis!");
}


//04 - Dia de descanso
let Sexta
if( sabado || domingo){
    console.log("Fim de semana!");
}else{
    console.log ("Dia útil");
}


//05 — Promoção especial
let desconto = 15%

if()








