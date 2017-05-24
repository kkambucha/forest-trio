import Bear from './animals/Bear';
import Rabbit from './animals/Rabbit';
import Wolf from './animals/Wolf';

window.onload = () => {
	let bearElem = document.querySelector('.js-bear-elem'),
		rabbitElem = document.querySelector('.js-rabbit-elem'),
		wolfElem = document.querySelector('.js-wolf-elem'),
		bear,
		rabbit,
		wolf;

	bear = new Bear(bearElem);
    rabbit = new Rabbit(rabbitElem);
    wolf = new Wolf(wolfElem);
	console.info('It\'s works!');
};
