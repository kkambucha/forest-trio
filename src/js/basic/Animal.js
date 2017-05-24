class Animal {
    constructor(htmlElement, sound, loop) {
        this.htmlElement = htmlElement;
        this.audio = new Audio(sound);
        if (loop) {
            this.audio.loop = true;
        }
        this.isPlay = false;
        this.htmlElement.addEventListener('click', this.togglePlay.bind(this));
    }
    play() {
        this.isPlay = true;
        this.audio.play();
    }
    stop() {
        this.isPlay = false;
        this.audio.pause();
        this.audio.currentTime = 0;
    }
    togglePlay() {
        if (this.isPlay) {
            this.htmlElement.classList.remove('active');
            this.stop();
        } else {
            this.htmlElement.classList.add('active');
            this.play();
        }
    }
}

export default Animal;