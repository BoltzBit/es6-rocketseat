class Usuario{
    constructor(email,senha){
        this.email = email,
        this.senha = senha
    }

    isAdmin(){
        return this.admin === true
    }
}

//receber da classe pai os construtores email e senha
//o diferencial é que Admin terá o parametro admin setado para true
class Admin extends Usuario{
    //é necessário passar para o construtor os parametros que são herdados da classe pai
    constructor(email,senha){
        super(email,senha);
        
        this.admin = true
    }
}

let User1 = new Usuario('mateus@look','senhaforte');
let Admin1 = new Admin('gusta@look','senhafraca');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
