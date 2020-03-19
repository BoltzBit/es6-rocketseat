import axios from 'axios';

//assim está elegante
export default async function getUserFromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch(err){
        console.log('Usuario não encontrado');
    }
}

//assim funcionou mas não parece bonito
//export default async function getUserFromGithub(user){
//    const response = await axios.get(`https://api.github.com/users/${user}`)
//        .then(response => {
//            console.log(response.data);
//        })
//        .catch(err => {
//            console.log('Usuario não encontrado');
//        })
//}