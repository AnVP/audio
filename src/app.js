import './app.scss';
import {block} from './audio/audio-list/audio-list';

const container = document.querySelector('.audio__list');
container.innerHTML = block;
// const cont = document.querySelector('.player');
// const audio = cont.querySelector('audio');
// const btn = cont.querySelector('.player__play');
// btn.addEventListener('click', audio.play());