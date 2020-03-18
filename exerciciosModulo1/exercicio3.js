//convertendo para arrow functions

//3.1
const arr = [1,2,3,4,5];
const arrMap = arr.map(item => item +10);

//3.2
const usuario = { nome:'Diego', idade:23};
const mostraIdade = usuario => usuario.idade;

//3.3
const name = 'Diego';
const idade = 23;
const mostraUsuario = (name = 'Diego', idade = 18) => {name,idade};

//3.4
const promise = () => new Promise((resolve,reject) => resolve('ok'))

console.log(arrMap);
console.log(mostraIdade(usuario));
console.log(name,idade);
console.log(name);
console.log(promise())