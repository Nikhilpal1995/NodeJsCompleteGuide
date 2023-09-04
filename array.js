// Transform array into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const transarr = arr.map(item => item === ' '? 'emprty string': item);

console.log(transarr);