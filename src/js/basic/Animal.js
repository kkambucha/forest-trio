import SoundCreator from '../basic/SoundCreator';
import { EventEmitter } from 'events';

class Animal extends EventEmitter {
    constructor(config) {
        super();
        this.htmlElement = config.htmlElement;

        this.htmlElement.addEventListener('click', () => {
            this.togglePlay();
        });

        this.sound = new SoundCreator(config.loop, config.sound);

        this.sound.on('startPlay', () => {
            this.htmlElement.classList.add('active');
        });
        this.sound.on('stopPlay', () => {
            this.htmlElement.classList.remove('active');
            this.emit('volodyastoy');
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
            if (this.sound.getIsPlayed()) {
                this.stop();
                this.play();
            } else {
                this.play();
            }
        }
    }
    isPlayed() {
        return this.sound.getIsPlayed();
    }
    getSound() {
        return this.sound;
    }
}

export default Animal;