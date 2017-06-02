import SoundCreator from '../basic/SoundCreator';
import { EventEmitter } from 'events';

class Animal extends EventEmitter {
    constructor(config) {
        super();
        this.htmlElement = config.htmlElement;

        if(typeof window.ontouchstart === 'undefined'){
            this.htmlElement.addEventListener('click', this.togglePlay.bind(this));
        } else{
            this.htmlElement.addEventListener('touchstart', this.togglePlay.bind(this));
        }

        this.sound = new SoundCreator(config.loop, config.sound);

        this.sound.on('stopPlay', () => {
            this.htmlElement.classList.remove('active');
            this.emit('volodyastoy');
        });
    }
    play() {
        this.sound.play();
        this.htmlElement.classList.add('active');
    }
    stop() {
        this.sound.stop();
        this.htmlElement.classList.remove('active');
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