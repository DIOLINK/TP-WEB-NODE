console.log('Transformar String en Array de Numeros');
const input = '123 | 456 | 789 | 1bc | 10';
console.log(
  'Output: ',
  input.split(' | ').filter((num) => Number(num))
);
console.log('Transformar Array de Numeros en un solo String');
const array = input.split(' | ').filter((num) => Number(num));
console.log('Output: ', array.join(','));
console.log('Conbinar dos Arrays');
const array1 = [1, 5, 8, 10];
const array2 = [2, 3, 8, 11];
console.log(array1.concat(array2));
console.log(array2.concat(array1));
console.log('combinarNArrays');
const arrayN = [[1, 3, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
console.log(arrayN.reduce((a, b) => a.concat(b)).sort((a, b) => a - b));
