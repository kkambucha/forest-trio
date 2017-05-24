import Animal from '../basic/Animal';
import { WolfSoundPath } from '../basic/constants';

class Wolf extends Animal {
    constructor(htmlElement) {
        super(htmlElement, WolfSoundPath, false);
    }
}

export default Wolf;