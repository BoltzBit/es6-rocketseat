export const delay = () => new Promise(resolve => setTimeout(resolve,1000));

export default function umPorSegundo(){
    delay().then(() => {
        console.log('1s');

        delay().then(() => {
            console.log('2s');

            delay().then(() => {
                console.log('3s');
            });
        });
    });
}