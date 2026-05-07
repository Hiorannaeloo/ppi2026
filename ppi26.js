// Programação para Internet - 2026.1
// Aluno: Hioranna Eloá Siqueira de Oliveira

// Introdução à JavaScript

console.log("Bem vindo a PPI!");

// variáveis
let name = "Hioranna";
let age = 20;
let isStudent = true; //A primeira sendo minuscula

const PI = 3.14; // não pode ser reatribuída
console.log("Valor de PI:", PI);

// Operadores Aritméticos
let x = 5 + 5;
let y = "5" + 5; // concatenação = colar/juntar
let z = "Hello" + 5;

console.log(x**2, y, z);
console.log(typeof x);

//Ativar formatador prettier
// ALT + SHIFT + F

//Operadores relacionais
console.log('5' != 5); // Diferente (comparação de valor)  
console.log('5' == 5); // true (comparação de valor)
console.log('5' === 5); // false (comparação de valor e tipo)

// Operadores de incremento
console.log(x++); // 10 (pós-incremento: retorna o valor antes de incrementar)
console.log(x);
console.log(++x); // 12 (pré-incremento: incrementa antes de retornar o valor)

// x++;
// ++x;
//x += 1;
//x = x + 1;

//Operadores lógicos - && (AND), || (OR), ! (NOT)
let isExpression = (true && 5 + 2 * 3 < 10) || false;
console.log(isExpression); // true

// if (condition) {
//  //condition === true
// } else {
// // condition === false
// }

// Template Strings
let text =
`React é tudo de bom
programar é minha vida
eu amo javascript`;
console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Arrays
let fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits.length); // Tamanho do array

console.log(fruits[0]); // Acessar o primeiro elemento
console.log(fruits[1]); // Acessar o segundo elemento
console.log(fruits[2]); // Acessar o terceiro elemento
console.log(fruits[3]); // Acessar o quarto elemento

fruits.push('Kiwi'); // Adicionar um elemento ao final do array
console.log(fruits);

console.log(fruits.pop()); // Remove o último elemento do array
console.log(fruits);

console.log(fruits.shift()); // Remove o primeiro elemento do array
console.log(fruits);

fruits.unshift('Lemon'); // Adiciona um elemento no início do array
console.log(fruits);

// Argumento 1 - posição onde o elemento será adicionado
// Argumento 2 - número de elementos a serem removidos a partir da posição
// Argumento 3 - elemento a ser adicionado  
fruits.splice(2, 0, 'Kiwi', 'blueberry'); // Adiciona um elemento na posição 2 sem remover nenhum elemento
console.log(fruits);

fruits.splice(2, 3); // Remove 3 elementos a partir da posição 2
console.log(fruits);

//Desafio: substituir 'apple' por 'kiwi'
fruits.splice(3, 1, 'kiwi'); // Substitui o elemento na posição 3 por 'kiwi'
console.log(fruits);

//Busca índice do elemento 'kiwi'
let index = fruits.indexOf('kiwi');
console.log(index); // Retorna o índice do elemento 'kiwi' ou -1 se não encontrado

fruits.splice(index, 1, 'apple');
console.log(fruits);



//Ordem crescente
fruits.sort(); // Ordena os elementos do array em ordem alfabética
console.log(fruits);

//Ordem decrescente
fruits.reverse(); // Inverte a ordem dos elementos do array
console.log(fruits);

//Outra versão para ordem crescente
let fruitsSort = fruits.toSorted(); // Cria uma cópia do array e ordena a cópia
console.log(fruits);
console.log(fruitsSort);
//OBS: sort não ordena números corretamente, para isso é necessário passar uma função de comparação como argumento para o método sort. Exemplo: fruits.sort((a, b) => a - b);

//Outra opção para ordem decrescente
let fruitsReverse = fruits.toReversed(); // Cria uma cópia do array e inverte a ordem da cópia
console.log(fruits);
console.log(fruitsReverse);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

//DESAFIO: criar um array 'numbers2' que armazene os valores de 'numbers' * 2  
//Output:[90, 8, 18, 32, 50]
const numbers2 = []
for (let i = 0; i < numbers.length; i++) {
    numbers2.push(numbers[i] * 2);
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
    return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((number) => number * 2));

console.log(numbers.toSorted((a, b) => a - b)); // Ordena os números em ordem crescente
console.log(numbers.toSorted((a, b) => b - a)); // Ordena os números em ordem decrescente

numbers.sort((a, b) => a - b); 
//Maior valor
console.log('Maior = ', numbers[numbers.length - 1]);
//Menor valor
console.log('Menor = ', numbers[0]);