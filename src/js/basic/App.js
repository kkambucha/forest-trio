import Animal from '../basic/Animal';
import Volodya from '../basic/Volodya';

class App {
    constructor(genre) {
        let bearElem = document.querySelector('.js-bear-elem'),
            rabbitElem = document.querySelector('.js-rabbit-elem'),
            wolfElem = document.querySelector('.js-wolf-elem'),
            volodyaElem = document.querySelector('.js-volodya-elem'),
            bear,
            rabbit,
            wolf,
            volodya;

        bear = new Animal({
            htmlElement: bearElem,
            sound: '../public/sounds/bear.wav',
            loop: false
        });

        rabbit = new Animal({
            htmlElement: rabbitElem,
            sound: '../public/sounds/rabbit.wav',
            loop: true
        });

        wolf = new Animal({
            htmlElement: wolfElem,
            sound: '../public/sounds/wolf.wav',
            loop: false
        });

        volodya = new Volodya({
            htmlElement: volodyaElem,
            sound: `../public/sounds/${genre}.wav`,
            loop: true,
            methronome: rabbit
        });

        volodya.on('start', () => {
            document.getElementById('body').classList.add('m-shake');
        });
        volodya.on('stop', () => {
            document.getElementById('body').classList.remove('m-shake');
        });
    }
}

export default App;