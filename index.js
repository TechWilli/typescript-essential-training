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
/* [SEÇÃO] - Tipos primitivos: string, number (aceita int e float) e boolean */
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
/* [SEÇÃO] - Type:
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
/* [SEÇÃO] - Arrays - definimos com o [] após o tipo da variável. Geralmente populamos arrays com apenas um tipo */
const amigos = ['Tony', 'Peter', 'Steve', 'Wanda'];
// amigos.push(5) acusa o erro Argument of type 'number' is not assignable to parameter of type 'string'.
const primeirosNumerosPrimos = [2, 5, 7, 11];
console.log('Lista de amigos:', amigos);
// Outra sintaxe para arrays, Array<tipoDaVAriavel> (em maiúsculo)
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const primeirosNumerosPares = [2, 4, 6, 8];
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* [SEÇÃO] - O tipo any deve ser pouco usado. Apenas quando realmente nao tem importância o tipo do valor da variável.
  Ou tanbém em arrays que armazenam vários tipos de valores
*/
const arrayDoido = ['William', 'teste', 22, ['a', 'b', 'c'], { nome: 'Alex', idade: 33 }];
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Tipos dos parâmetros das funções */
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
/* [SEÇÃO] - Tipo do retorno da função */
function saudacao() {
    // return 5 como o retorno da função deve ser string, se retornasse qualquer outro tipo, daria erro na compilação
    return 'Seja bem vindo ao meu arquivo de estudos de Typescrip';
}
function valorPI() {
    return Math.PI;
}
// há também o retorno vazio (void) onde não há de fato retorno de algum valor para a função
function cumprimento() {
    console.log('Olá, tudo bem com você?');
}
console.log('valor do PI:', valorPI());
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Declarando tipos de objetos. No exemplo estamos configurando que o parametro pessoa deve ser um objeto com as chaves dos tipos especificados */
function recebeObjetoParametro(pessoa) {
    console.log('nome:', pessoa.nome);
    console.log('idade:', pessoa.idade);
}
// recebeObjetoParametro('william') -> dá o erro Argument of type 'string' is not assignable to parameter of type '{ nome: string; idade: number; }'
// recebeObjetoParametro({ nome: 'William', idade: '22' }) -> mostra o erro Type 'string' is not assignable to type 'number'. The expected type comes from property 'idade' which is declared here on type '{ nome: string; idade: number; }'
recebeObjetoParametro({ nome: 'William', idade: 22 });
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Parâmetros opcionais da função. usando o "?" antes do ":" na especificação do do tipo */
function calculaMediaNotas(nota1, nota2, recuperacao) {
    let mediaFinal;
    // recuperação é um parâmetro opcional
    if (recuperacao) {
        mediaFinal = (nota1 + nota2 + recuperacao) / 3;
    }
    else {
        mediaFinal = (nota1 + nota2) / 2;
    }
    console.log(`A média final do aluno é ${mediaFinal.toFixed(2)}`);
}
calculaMediaNotas(4.8, 2.8, 9);
function mostraNomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome !== null && sobrenome !== void 0 ? sobrenome : ''}`.trim(); // trim para caso noa tenha o sobrenome, nao ter o espaço final
}
console.log('mostra nome completo:', mostraNomeCompleto('Tony', 'Stark'));
// caso o sobrneome nao for passado, não haverá erro
console.log('mostra nome completo:', mostraNomeCompleto('Peter'));
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Tipo union é usado para dar mais de uma opção para o tipo do dado.
  A quantidade de opções nós que decidimos separando pelo caractere "|"
*/
function mostraSaldo(saldo) {
    console.log(`Seu saldo é de ${saldo} reais`);
}
mostraSaldo(500.25);
mostraSaldo('1.500,25');
// Com arrays podemos usar da seguinte forma:
// é a opção ideal para usar no lugar do any quando há necessidade de receber valores diversos
const arrayDiverso = [1, 'w', true, 555];
console.log('Array com tipos de dados diversos:', arrayDiverso);
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Type Alias. Essa é uma forma de encurtar a verbosidade das definições de union que possam ser muito longas */
// Exemplo sem alias, usando union normal
const dadoDoBack = 'teste';
const dadoBackDois = 'teste 2';
let valorAlfanumerico = '1999';
valorAlfanumerico = 1999;
// posso implementar mais tipos à Pessoa que não terá problema
// interface Pessoa {
//   sexo: string
// }
// mostrará o erro na variável "amigo" -> Property 'sexo' is missing in type '{ nome: string; idade: number; trabalha: true; }' but required in type 'Pessoa'.
const amigo = {
    nome: 'Mel',
    idade: 17,
    trabalha: true
};
function apresentaAmigo(amigo) {
    console.log(`Este amigo se chama ${amigo.nome}, tem ${amigo.idade} anos e ${amigo.trabalha ? 'já está trabalhando' : 'ainda não trabalha'}.`);
}
apresentaAmigo(amigo);
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Type literals. Podemos passar valores em si. Isso é bastante útil com union. */
function mostraPosicao(direcao) {
    console.log(`A posição selecionada foi: ${direcao}`);
}
mostraPosicao('top'); // não acusa erro, pois está nos tipos que definimos
// mostraPosicao('acima') // Argument of type '"acima"' is not assignable to parameter of type '"top" | "right" | "bottom" | "left"'. 
function oitoOuOitenta(valor) {
    console.log(`Não tem meio termo, é 8 ou 80. Você escolheu ${valor}`);
}
oitoOuOitenta(80);
/**
 * @param review valor de 1 a 5 ou false
 * @returns frase com a avaliação em estrelas dada pelo usuário
 */
function obterReviewUsuario(review) {
    if (!review) {
        return `o Usuário não deixou uma review`;
    }
    else if (review >= 1 && review <= 5) {
        return `O usuário avaliou com ${review} ${review === 1 ? 'estrela' : 'estrelas'}`;
    }
}
console.log(obterReviewUsuario(false));
console.log(obterReviewUsuario(4));
console.log(obterReviewUsuario(5));
