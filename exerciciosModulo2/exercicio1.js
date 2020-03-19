export const delay = () => new Promise(resolve => setTimeout(resolve,1000));

export default async function umPorSegundo(){
    await delay()
            .then(() => console.log('1s'))
            .then(() => console.log('2s'))
            .then(() => console.log('3s'))
            .then(() => console.log('4s'))
}