import Animal from '../basic/Animal';
import { BearSoundPath } from '../basic/constants';

class Bear extends Animal {
    constructor(htmlElement) {
        super(htmlElement, BearSoundPath, false);
    }
}

export default Bear;