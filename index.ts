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
const firstName: string = 'William'
const lastName: string = 'Stark'

const idade: number = 22
const pontoFlutuante: number = 14.34
let ano: number = 2022

// ao tentar atribuir um tipo de dado diferente ao ano qué é númeor, o TS acusa o erro: Type 'string' is not assignable to type 'number'.
// ano = 'Dois mil e vinte e dois'

const isGoodPerson: boolean = true
const isProgrammer: boolean = true
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Type:
  Existem dois tipos de tipagem no TS:
  Type annotation - o que foi feito acima, definindo o tipo do dado manualmente
  Type inference - o TS identifica e define o tipo para nós

  Preferir trabalhar com o type annotation para deixar explícito o tipo de dado que estamos criando e manipulando
*/
const numeroDaSorte: number = 14

const numeroDaSorteString = numeroDaSorte.toString() // o TS define a variavel por inferência sabendo que é uma string
const resultadoFinal = `O meu número da sorte é o ${numeroDaSorteString}`

console.log(resultadoFinal)
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Arrays - definimos com o [] após o tipo da variável. Geralmente populamos arrays com apenas um tipo */
const amigos: string[] = ['Tony', 'Peter', 'Steve', 'Wanda']
// amigos.push(5) acusa o erro Argument of type 'number' is not assignable to parameter of type 'string'.

const primeirosNumerosPrimos: number[] = [2, 5, 7, 11]

console.log('Lista de amigos:', amigos)

// Outra sintaxe para arrays, Array<tipoDaVAriavel> (em maiúsculo)
const mesesDoAno: Array<string> = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const primeirosNumerosPares: Array<number> = [2, 4, 6, 8]
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - O tipo any deve ser pouco usado. Apenas quando realmente nao tem importância o tipo do valor da variável.
  Ou tanbém em arrays que armazenam vários tipos de valores
*/
const arrayDoido: any = ['William', 'teste', 22, ['a', 'b', 'c'], { nome: 'Alex', idade: 33 }]
// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Tipos dos parâmetros das funções */
function imprimeNome(nome: string) {
  return `Seu nome é ${nome}`
}

console.log(imprimeNome('William'))

function soma(num1: number, num2: number) {
  return num1 + num2
}

console.log(soma(10, 5))
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Tipo do retorno da função */
function saudacao(): string {
  // return 5 como o retorno da função deve ser string, se retornasse qualquer outro tipo, daria erro na compilação
  return 'Seja bem vindo ao meu arquivo de estudos de Typescrip'
}

function valorPI(): number {
  return Math.PI
}

console.log('valor do PI:', valorPI())
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Declarando tipos de objetos. No exemplo estamos configurando que o parametro pessoa deve ser um objeto com as chaves dos tipos especificados */
function recebeObjetoParametro(pessoa: { nome: string, idade: number }) {
  console.log('nome:', pessoa.nome)
  console.log('idade:', pessoa.idade)
}

// recebeObjetoParametro('william') -> dá o erro Argument of type 'string' is not assignable to parameter of type '{ nome: string; idade: number; }'
// recebeObjetoParametro({ nome: 'William', idade: '22' }) -> mostra o erro Type 'string' is not assignable to type 'number'. The expected type comes from property 'idade' which is declared here on type '{ nome: string; idade: number; }'
recebeObjetoParametro({ nome: 'William', idade: 22 })
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Parâmetros opcionais da função. usando o "?" antes do ":" na especificação do do tipo */
function calculaMediaNotas(nota1: number, nota2: number, recuperacao?: number) {
  let mediaFinal: number

  // recuperação é um parâmetro opcional
  if (recuperacao) {
    mediaFinal = (nota1 + nota2 + recuperacao) / 3
  } else {
    mediaFinal = (nota1 + nota2) / 2
  }

  console.log(`A média final do aluno é ${mediaFinal.toFixed(2)}`)
}

calculaMediaNotas(4.8, 2.8, 9)

function mostraNomeCompleto(nome: string, sobrenome?: string): string {
  return `${nome} ${sobrenome ?? ''}`.trim() // trim para caso noa tenha o sobrenome, nao ter o espaço final
}

console.log('mostra nome completo:', mostraNomeCompleto('Tony', 'Stark'))
// caso o sobrneome nao for passado, não haverá erro
console.log('mostra nome completo:', mostraNomeCompleto('Peter'))
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Tipo union é usado para dar mais de uma opção para o tipo do dado.
  A quantidade de opções nós que decidimos separando pelo caractere "|"
*/
function mostraSaldo(saldo: string | number) {
  console.log(`Seu saldo é de ${saldo} reais`)
}

mostraSaldo(500.25)
mostraSaldo('1.500,25')

// Com arrays podemos usar da seguinte forma:
// é a opção ideal para usar no lugar do any quando há necessidade de receber valores diversos
const arrayDiverso: Array<number | string | boolean> = [1, 'w', true, 555]

console.log('Array com tipos de dados diversos:', arrayDiverso)
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Type Alias. Essa é uma forma de encurtar a verbosidade das definições de union que possam ser muito longas */

// Exemplo sem alias, usando union normal
const dadoDoBack: string | number | boolean = 'teste'

// para não ficar muito extenso na mesma linha de declaração, podemos fazer assim:
type dadoBack = string | number | boolean
const dadoBackDois: dadoBack = 'teste 2'

type alfanumerico = string | number
let valorAlfanumerico: alfanumerico = '1999'
valorAlfanumerico = 1999

// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Interfaces. Usada para criar tipagem para objetos. Muito utilizada em React, por exmeplo
  Ela pode ser alterada, diferente do alias que não
*/

interface Pessoa {
  nome: string,
  idade: number,
  trabalha: boolean
}

// posso implementar mais tipos à Pessoa que não terá problema
// interface Pessoa {
//   sexo: string
// }
// mostrará o erro na variável "amigo" -> Property 'sexo' is missing in type '{ nome: string; idade: number; trabalha: true; }' but required in type 'Pessoa'.

const amigo: Pessoa = {
  nome: 'Mel',
  idade: 17,
  trabalha: true
}

function apresentaAmigo(amigo: Pessoa) {
  console.log(`Este amigo se chama ${amigo.nome}, tem ${amigo.idade} anos e ${amigo.trabalha ? 'já está trabalhando' : 'ainda não trabalha'}.`)
}

apresentaAmigo(amigo)
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Type literals. Podemos passar valores em si. Isso é bastante útil com union. */
function mostraPosicao(direcao: 'top' | 'right' | 'bottom' | 'left') {
  console.log(`A posição selecionada foi: ${direcao}`)
}

mostraPosicao('top') // não acusa erro, pois está nos tipos que definimos
// mostraPosicao('acima') // Argument of type '"acima"' is not assignable to parameter of type '"top" | "right" | "bottom" | "left"'. 

function oitoOuOitenta(valor: 8 | 80) {
  console.log(`Não tem meio termo, é 8 ou 80. Você escolheu ${valor}`)
}

oitoOuOitenta(80)
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - tipando funções de callback */
const saudacaoFrase = (name: string): void => {
    console.log(`Olá, ${name}!`)
}

// podemos tipar desta forma uma função de callback:
// aqui além do argumento nomePessoa, passamos o callback sendo tipado como uma função que recebe uma string e retorna vazio
const saudarPessoa = (nomePessoa: string, saudacaoCallback: (name: string) => void): void => {
    saudacaoCallback(nomePessoa)
}

saudarPessoa('William', saudacaoFrase)

// outro exemplo, aqui tipamos o callback de parametro sendo uma função vazia
function chamaCallback(callback: () => void) {
    callback()
}

function callback() {
    console.log('Oi, eu sou uma função callback executada dentro de outra função')
}

chamaCallback(callback)

// podemos deixar melhor estruturado o tipo da função colocando em um type para ela
type Operacao = (num1: number, num2: number) => number

function somaDoisValores(valor1: number, valor2: number, operacao: Operacao): number {
    return operacao(valor1, valor2)
}

function somaNumeros(v1: number, v2: number): number {
    return v1 + v2
}

console.log('O resultado da operação aritmética de soma foi:', somaDoisValores(10, 5, somaNumeros))
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Generic Functions. Usadas para trabalhar com dados mais heterogêneos,
  onde não sabemos exatamente o que virá, mas podemos definir como virá, da seguinte forma:
*/

// Por convenção, usamos T ou U para generic types
// a função é genérica pois tem o <> antes de sua assinatura, o tipo do parametro é um array de genéricos e retorna algo genérico
function firstArrayElement<T>(array: T[]): T {
  return array[0]
}

console.log('Primeiro elemento do array:', firstArrayElement([1, 2, 3, 4]))
console.log('Primeiro elemento do array:', firstArrayElement(['a', 'b', 'c']))
console.log('Primeiro elemento do array:', firstArrayElement(['will', 2, false]))

function lastArrayElement<U>(array: U[]): U {
  return array[array.length - 1]
}

console.log('Último elemento do array:', lastArrayElement([1, 2, 3, 4]))

// podemos restringir em constraints os generics com tipos específicos também, desta forma:
// extendendo os tipos que queremos no generic
function maiorEntreDoisValores<T extends number | string>(n1: T, n2: T): T {
  if (Number(n1) > Number(n2)) {
    return n1

  } else {
    return n2
  }
}

console.log('maiorEntreDoisValores:', maiorEntreDoisValores(5, 10))
console.log('maiorEntreDoisValores:', maiorEntreDoisValores('25', '10'))
// console.log('maiorEntreDoisValores:', maiorEntreDoisValores(5, '10')) // aqui ele acusa erro, pois ou deve ser string ou number, um de cada nao é permitido, graças à constraint

function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return [...arr1, ...arr2]
}

// isso também é possível, definir as constraints do generic ao executá-lo
console.log('mergeArrays:', mergeArrays<number | string>([1, 2, 3, 4], ['a', 'b', 'c']))
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Type unknown. Semelhante ao any, mas exige narrowing para tipos nao primitivos como array e objeto */
function retornaValor(valor: unknown) {

  if (Array.isArray(valor)) {
    console.log('valor', valor[0])
  }

  console.log('valor',  valor)
}
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Rest parameters. Semelhante ao JS. Neste caso basta apenas tipar o que vem com o rest operator */
function somaVariosNumeros(...numeros: number[]): number {
  const valorFinal = numeros.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
  }, 0)

  return valorFinal
}

console.log('soma vários números:', somaVariosNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9))

// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
/* [SEÇÃO] - Destructuring */
function revelaIdentidadeHomemAranha({ nome, sobrenome }: { nome: string, sobrenome: string }): void {
  console.log(`Nome completo: ${nome} ${sobrenome}`)
}

const homemAranha = {
  nome: 'Peter',
  sobrenome: 'Parker'
}

revelaIdentidadeHomemAranha(homemAranha)

// ou com interface para definir o shape do objeto passado
interface IdentidadeHeroi {
  nome: string,
  sobrenome: string
}

function revelaHeroi({ nome, sobrenome }: IdentidadeHeroi) {
    console.log(`Identidade do Herói: ${nome} ${sobrenome}`)
}

revelaHeroi(homemAranha)
// ------------------------------------------------------------------------------------