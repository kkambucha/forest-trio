import Animal from '../basic/Animal';
import { RabbitSoundPath } from '../basic/constants';

class Rabbit extends Animal {
    constructor(htmlElement) {
        super(htmlElement, RabbitSoundPath, true);
    }
}

export default Rabbit;