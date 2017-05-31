import SoundCreator from '../basic/SoundCreator';

class Animal {
    constructor(htmlElement, sound, loop) {
        this.htmlElement = htmlElement;

        this.htmlElement.addEventListener('click', () => {
            this.togglePlay();
        });
        if (loop) {
            this.sound = new SoundCreator(true, sound);
        } else {
            this.sound = new SoundCreator(false, sound);
        }
        this.sound.on('startPlay', () => {
            this.htmlElement.classList.add('active');
        });
        this.sound.on('stopPlay', () => {
            this.htmlElement.classList.remove('active');
        });
    }
    play() {
        this.sound.play();
    }
    stop() {
        this.sound.stop();
    }
    togglePlay() {
        if (this.sound.getIsLoop()) {
            if (this.sound.getIsPlayed()) {
                this.stop();
            } else {
                this.play();
            }
        } else {
            console.log();
            if (this.sound.getIsPlayed()) {
                this.stop();
                this.play();
            } else {
                this.play();
            }
        }
    }
}

export default Animal;