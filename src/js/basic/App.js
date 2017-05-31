import Bear from '../animals/Bear';
import Rabbit from '../animals/Rabbit';
import Wolf from '../animals/Wolf';

class App {
    constructor() {
        let bearElem = document.querySelector('.js-bear-elem'),
            rabbitElem = document.querySelector('.js-rabbit-elem'),
            wolfElem = document.querySelector('.js-wolf-elem'),
            bear,
            rabbit,
            wolf;

        bear = new Bear(bearElem);
        // setTimeout(() => {
        //     bear.play();
        // }, 2000);
        // setTimeout(() => {
        //     bear.play();
        // }, 5000);
        // setTimeout(() => {
        //     bear.play();
        // }, 7000);

        rabbit = new Rabbit(rabbitElem);
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

        wolf = new Wolf(wolfElem);
    };
}

export default App;