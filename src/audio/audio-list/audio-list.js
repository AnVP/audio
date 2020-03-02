const list = [
  {
    id: 1,
    title: 'Infant holy infant lowly',
    author: 'Ann Alee',
    audio: 'src/files/Ann_Alee_-_05_-_Infant_Holy_Infant_Lowly.mp3',
  },
  {
    id: 2,
    title: 'The demon inside your head',
    author: 'Dazie Mae',
    audio: 'src/files/Dazie_Mae_-_13_-_The_Demon_Inside_Your_Head.mp3',
  },
  {
    id: 3,
    title: 'Gone with the wind',
    author: 'Lilian Hak',
    audio: 'src/files/Lilian_Hak_-_07_-_Gone_With_The_Wind.mp3',
  }
]

function renderItemList(el) {
  return `
  <div class="audio__player player">
    <h2 class="player__title">${ el.title }</h2>
    <p class="player__author">${ el.author }</p>
    <audio id="audio${ el.id }">
      <source src="${ el.audio }" type="audio/mpeg"/>
    </audio>
    <div class="player__progress">
      <div class="player__time">
        <span class="player__time-value player__time-value--current">0:00</span>
        <span class="player__time-value player__time-value--total">0:00</span>
      </div>
      <input type="range" name="range${ el.id }" id="range${ el.id }" value="0" max="" aria-label="длительность">
    </div>
    <div class="player__controls">
      <span class="material-icons player__control player__play">play_circle_outline</span>
      <div class="player__volume">
      <span class="material-icons player__control">volume_up</span>
        <input type="range" name="volume${ el.id }" id="volume${ el.id }" value="100" max="100" aria-label="громкость">
      </div>
      <div class="player__speed">
        <select name="speed${ el.id }" id="speed${ el.id }" aria-label="скорость">
          <option value="50">0.5x</option>
          <option value="100" selected>1x</option>
          <option value="125">1.25x</option>
          <option value="150">1.5x</option>
          <option value="175">1.75x</option>
          <option value="200">2x</option>
          <option value="225">2.25x</option>
        </select>
      </div>
      <a href="#" class="player__download player__control material-icons" download="${ el.audio }" aria-label="скачать">save_alt</a>
      <span class="player__load player__control material-icons">save_alt</span>
    </div>
  </div>
  `
}

function renderList(el) {
  return `<li class="audio__item">
      ${ renderItemList(el) }
  </li>`
}

export const block = list.length
  ? list.map(renderList).join('')
  : `<p>Музыка не добавлена</p>`;