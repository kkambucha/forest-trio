import Animal from '../basic/Animal';
import Volodya from '../basic/Volodya';

class App {
    constructor() {
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
        // setTimeout(() => {
        //     bear.play();
        // }, 2000);
        // setTimeout(() => {
        //     bear.play();
        // }, 5000);
        // setTimeout(() => {
        //     bear.play();
        // }, 7000);

        rabbit = new Animal({
            htmlElement: rabbitElem,
            sound: '../public/sounds/rabbit.wav',
            loop: true
        });
        // setTimeout(() => {
        //     rabbit.play();
        // }, 2000);
        // setTimeout(() => {
        //     rabbit.stop();
        // }, 5000);
        // setTimeout(() => {
        //     rabbit.play();
        // }, 7000);
        // setTimeout(() => {
        //     rabbit.stop();
        // }, 10000);
        // setTimeout(() => {
        //     rabbit.play();
        // }, 13000);
        // setTimeout(() => {
        //     rabbit.stop();
        // }, 18000);

        wolf = new Animal({
            htmlElement: wolfElem,
            sound: '../public/sounds/wolf.wav',
            loop: false
        });

        volodya = new Volodya({
            htmlElement: volodyaElem,
            sound: '../public/sounds/beat.wav',
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