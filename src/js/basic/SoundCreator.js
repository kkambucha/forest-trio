class SoundCreator {
    constructor(loop, soundUrl) {
        this.loop = loop;
        this.isInit = false;
        this.audioContext = new AudioContext();
        this.source = this.audioContext.createBufferSource();
        this.source.connect(this.audioContext.destination);
        this.oldBuffer = null;
        this.newSource = null;

        this.getAudio(soundUrl, this.initAudio.bind(this));
    }
    getAudio(src, callback) {
        let request;

        request = new XMLHttpRequest();
        request.open('GET', src, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            callback(request.response);
        };

        request.send();
    }
    initAudio(audio) {
        this.audioContext.decodeAudioData(audio, (audio) => {
            this.source.buffer = audio;
            this.source.loop = this.loop;
            this.isInit = true;
        });
    }
    reInitAudio(isLoop) {
        this.oldBuffer = this.source.buffer;
        this.newSource = this.audioContext.createBufferSource();
        this.newSource.connect(this.audioContext.destination);
        this.newSource.buffer = this.oldBuffer;
        if(isLoop) {
            this.source.stop(0);
        }
        this.source = this.newSource;
        this.source.loop = this.loop;
    }
    play() {
        console.log('play');
        if(this.isInit) {
            this.source.start(0);
            if(!this.loop) {
                this.reInitAudio(false);
            }
        }
    }
    stop() {
        console.log('stop');

        if(this.isInit) {
            if(this.loop) {
                this.reInitAudio(true);
            } else {
                this.source.stop(0);
            }
        }
    }
}

export default SoundCreator;