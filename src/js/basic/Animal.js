import SoundCreator from '../basic/SoundCreator';

class Animal {
    constructor(htmlElement, sound, loop) {
        this.htmlElement = htmlElement;
        // this.htmlElement.addEventListener('click', this.togglePlay.bind(this));
        if (loop) {
            this.sound = new SoundCreator(true, sound);
        } else {
            this.sound = new SoundCreator(false, sound);
        }
    }
    play() {
        this.sound.play();
    }
    stop() {
        this.sound.stop();
    }
}

export default Animal;