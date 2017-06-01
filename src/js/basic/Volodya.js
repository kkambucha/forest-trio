import Animal from './Animal';

class Volodya extends Animal {
    constructor(config) {
        super(config);
        this.volodyaActive = false;
        this.methronomeObj = config.methronome;
        this.methronomeSound = this.methronomeObj.getSound();
        this.methronomeObj.on('volodyastoy', this.stop.bind(this));
    }
    play() {
        if (this.methronomeObj.isPlayed()) {
            this.methronomeSound.on('step', () => {
                if(!this.volodyaActive && this.htmlElement.checked) {
                    this.sound.play();
                    this.volodyaActive = true;
                    this.emit('start');
                }
            });
        } else {
            this.htmlElement.checked = false;
        }
    }
    stop() {
        this.volodyaActive = false;
        this.htmlElement.checked = false;
        this.methronomeSound.removeListener('step', () => {
            return false;
        });
        this.sound.stop();
        this.emit('stop');
    }
}

export default Volodya;