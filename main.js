class List{
    constructor(){
        this.todos = [];
    }

    add(data){
        this.todos.push(data);
        console.log(this.todos)
    }
}

class TodoList extends List{
    constructor(){
        //chama a classe pai
        super();

        this.usuario = 'Diego';
    }

    MostraUsuario(){
        console.log(this.usuario);
    }
}

class Matematica{
    //metodos static não exergam this
    static soma(a,b){
        return a+b;
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.MostraUsuario();
console.log(Matematica.soma(1,3));

const arr = [1,2,3,4,5,6,7,8,9]

const newArr = arr.map(item => item*2);

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total+next
});

console.log(sum);

const filter = arr.filter(function(item){
    return item%2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);

const teste = () => {return 'teste'};

console.log(teste());

//quando vc precisa retornar um objeto ficaria desta forma
const teste2 = () => ({nome: 'Diego'});

console.log(teste2())


function somaA(a=2,b=3){
    //possibilidade de valores padrões passados como paramtros
    return a+b;
}

console.log(somaA(1))

const usuario = {
    nome: 'Mateus',
    idade: 23,
    endereco:{
        cidade: 'Rio do Sul',
        estado: 'RS',
    },
};

console.log(usuario);

//forma arcaica
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade }} = usuario;

console.log(nome,idade,cidade);

//uma forma de usar desestruturação

function mostraNome({ nome, idade }){
    console.log(nome,idade);
}

mostraNome(usuario);

//rest, pegar o resto das propriedades
const user = {
    name:'Diego',
    idade:25,
    empresa:'Rockeseat',
};

const { name, ...resto } = user;

console.log(name);
console.log(resto);


//com array
const arr2 = [1,2,3,4,5,6];
const [ a , b , ...c] = arr2;

console.log(a);
console.log(b);
console.log(c);

//podemos usar em funcao
function soma(...params){
    return params.reduce((total,next) => total + next);
}

console.log(soma(1,2,3,4));

function sobra(a, b, ...param){
    console.log(a,b,param);
}


sobra(1,2,3,4,4,6,7);


//usando o spread operator
const arrMeu = [1,2,3];
const arrSeu = [4,5,6];

const arrNosso = [ ...arrMeu, ...arrSeu ];

console.log(arrNosso);

//outro uso para o spread
const usuario1 = {
    name: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};

//copia todo objeto e muda uma variavel de interesse
const usuario2 = { ...usuario1, name: 'Mateus'};

console.log(usuario2);

const name1 = 'Mateus';
const idade1 = 23;

console.log(`Meu nome é ${name1} e tenho ${idade1} anos`);

const n = 'Mateus';
const i = 23;

//short syntax
const user2 = {
    n,
    i,
    empresa: 'Rocketseat'
};

console.log(user2);