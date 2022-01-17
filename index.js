"use strict";
// Iniciando dos estudos. 16/01/2022
/*
O TypeScript tem como principal função "tunar" o JavasScript através da tipagem forte
dando mais segurança na manipulação de dados em projetos no geral
*/
// *************************************************************************
// DICA DE OURO: PARA COMPILAR O TYPESCRIPT AUTOMATICAMENTE COM O HOT RELOAD
// USAR NO TERMINAL tsc -w
// *************************************************************************
// ------------------------------------------------------------------------------------
/* Tipos primitivos: string, number (aceita int e float) e boolean */
const firstName = 'William';
const lastName = 'Stark';
const idade = 22;
const pontoFlutuante = 14.34;
let ano = 2022;
// ao tentar atribuir um tipo de dado diferente ao ano qué é númeor, o TS acusa o erro: Type 'string' is not assignable to type 'number'.
// ano = 'Dois mil e vinte e dois'
const isGoodPerson = true;
const isProgrammer = true;
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* Type:
  Existem dois tipos de tipagem no TS:
  Type annotation - o que foi feito acima, definindo o tipo do dado manualmente
  Type inference - o TS identifica e define o tipo para nós

  Preferir trabalhar com o type annotation para deixar explícito o tipo de dado que estamos criando e manipulando
*/
const numeroDaSorte = 14;
const numeroDaSorteString = numeroDaSorte.toString(); // o TS define a variavel por inferência sabendo que é uma string
const resultadoFinal = `O meu número da sorte é o ${numeroDaSorteString}`;
console.log(resultadoFinal);
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* Arrays - definimos com o [] após o tipo da variável. Geralmente populamos arrays com apenas um tipo */
const amigos = ['Tony', 'Peter', 'Steve', 'Wanda'];
// amigos.push(5) acusa o erro Argument of type 'number' is not assignable to parameter of type 'string'.
const primeirosNumerosPrimos = [2, 5, 7, 11];
console.log('Lista de amigos:', amigos);
// Outra sintaxe para arrays, Array<tipoDaVAriavel> (em maiúsculo)
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const primeirosNumerosPares = [2, 4, 6, 8];
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* O tipo any deve ser pouco usado. Apenas quando realmente nao tem importância o tipo do valor da variável.
  Ou tanbém em arrays que armazenam vários tipos de valores
*/
const arrayDoido = ['William', 'teste', 22, ['a', 'b', 'c'], { nome: 'Alex', idade: 33 }];
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* Tipos dos parâmetros das funções */
function imprimeNome(nome) {
    return `Seu nome é ${nome}`;
}
console.log(imprimeNome('William'));
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(10, 5));
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* Tipo do retorno da função */
function saudacao() {
    // return 5 como o retorno da função deve ser string, se retornasse qualquer outro tipo, daria erro na compilação
    return 'Seja bem vindo ao meu arquivo de estudos de Typescrip';
}
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* Declarando tipos de objetos */
function recebeObjetoParametro(pessoa) {
    console.log('nome:', pessoa.nome);
    console.log('idade:', pessoa.idade);
}
// recebeObjetoParametro('william') dá o erro Argument of type 'string' is not assignable to parameter of type '{ nome: string; idade: number; }'
recebeObjetoParametro({ nome: 'William', idade: 22 });
// ------------------------------------------------------------------------------------
