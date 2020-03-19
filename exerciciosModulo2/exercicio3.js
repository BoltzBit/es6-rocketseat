import axios from 'axios';

export default class Github{
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
        }catch(err){
            console.log('Repositorio não encontrado');
        }
    }
}