//5.1
//receber array e retorna o primeiro parametro em x e o restante em y
const arr = [1,2,3,4,5,6];

const [ x, ...y ] = arr;

console.log(x);
console.log(y);

//funcao que recebe varios parametros e retorna a soma deles
function soma(...params){
    return params.reduce((total,next) => total+next);
}


console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));

//5.2
const usuario = {
    name: 'Diego',
    idade: 23,
    endereco:{
        cidade:'Rio do Sul',
        estado:'SC',
        pais:'Brasil',
    }
};

const usuario2 = { ...usuario, name: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade:'Lontra' } };

console.log(usuario2);
console.log(usuario3);