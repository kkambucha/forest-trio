import { EventEmitter } from 'events';
import Clock from 'dilla';

class SoundCreator extends EventEmitter {
    constructor(loop, soundUrl) {
        super();

        this.loop = loop;
        this.isInit = false;
        this.isPlayed = false;
        this.audioContext = new AudioContext();
        this.source = this.audioContext.createBufferSource();
        this.source.connect(this.audioContext.destination);
        this.oldBuffer = null;
        this.newSource = null;
        this.audioOptions = {
            'tempo': 140,
            'beatsPerBar': 4,
            'loopLength': 2
        };
        this.clock = new Clock(this.audioContext, this.audioOptions);
        this.step = 0;

        this.clock.set('metronome', [
            {
                'position': '*.1.01',
                'freq': 440,
                'duration': 15
            },
            [
                '*.>1.01',
                {
                    'freq': 330, 'duration': 15
                }
            ]
        ]);

        this.clock.on('step', (step) => {
            if(step.event === 'start') {
                this.loopStep();
            }
        });

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
        this.emit('startPlay');
        if(this.isInit) {
            this.source.start(0);
            this.source.addEventListener('ended', () => {
                this.isPlayed = false;
                this.emit('stopPlay');
            });
            if(!this.loop) {
                this.reInitAudio(false);
            } else {
                this.clock.start();
            }

            this.isPlayed = true;
        }
    }
    stop() {
        if(this.isInit && this.isPlayed) {
            if(this.loop) {
                this.reInitAudio(true);
                this.step = 0;
                this.clock.stop();
            } else {
                this.reInitAudio(false);
            }
        }
        this.isPlayed = false;
    }
    loopStep() {
        if (this.step === 8) {
            this.emit('step');
            this.step = 0;
        }
        this.step++;
    }
    getLoopStep() {
        return this.step;
    }
    getIsPlayed() {
        return this.isPlayed;
    }
    getIsLoop() {
        return this.loop;
    }
}

export default SoundCreator;