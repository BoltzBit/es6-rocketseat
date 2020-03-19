const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//mostrar somente as idades das pessoas
const idades = usuarios.map(({ idade }) => idade);
//usuarios maiores de 18 e que trabalham na rocketseat
const filtro = usuarios.filter(({ idade, empresa }) => idade>18 && empresa === 'Rocketseat');
//funcionario que trabalha na google
const google = usuarios.find(({ empresa }) => empresa === 'Google');
//multiplicar as idades por 2 e filtrar quem tem no maximo 50
const multIdade = usuarios
                    .map(usuario => ({...usuario, idade: usuario.idade*2}))
                    .filter(({ idade }) => idade<50);

console.log(idades);
console.log(filtro);
console.log(google);
console.log(multIdade);