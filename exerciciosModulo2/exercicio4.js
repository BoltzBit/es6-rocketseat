import axios from 'axios';

export const buscaUsuarios = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data);
    }catch(err){
        console.log('usuario não encontrado');
    }
} 