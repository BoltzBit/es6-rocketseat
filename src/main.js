import axios from 'axios';
import umPorSegundo, { delay } from './exercicio1';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err){
            console.log('Erro na api');
        }
    }
}

umPorSegundo();

//Api.getUserInfo('boltzbit');
//Api.getUserInfo('diego3g');
//Api.getUserInfo('suenna');




//import ClasseUsuario, { idade as idadeUsuario} from './functions';
////ClasseUsuario.info();
////alert(idadeUsuario);
//
//const minhaPromisse = () => new Promise((resolve,reject) => {
//    setTimeout(() => {resolve('Ok')},2000);
//});
//
////async function executaPromisse(){
////    console.log(await minhaPromisse());
////    console.log(await minhaPromisse());
////    console.log(await minhaPromisse());
////    console.log(await minhaPromisse());
////}
//
////com arrow function
//const executaPromisse = async () => {
//    console.log(await minhaPromisse());
//    console.log(await minhaPromisse());
//    console.log(await minhaPromisse());
//    console.log(await minhaPromisse());
//};
//
//executaPromisse();