import Masonry from 'masonry-layout';

window.onload = function () {

    const grid = document.querySelector('.grid')

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 25
    });

    const btnPlayTune = document.getElementById('playTune');
    btnPlayTune.innerText = "▶ Tune"

    //https://newbedev.com/html5-check-if-audio-is-playing
    let audio = new Audio('http://acnhapi.com/v1/hourly/1');
    btnPlayTune.addEventListener('click', e => {
        e.preventDefault();
        if (audio.paused) {
            audio.play();
            btnPlayTune.innerText = "⏸ Tune";
        } else if (audio.duration > 0 && !audio.paused) {
            audio.pause();
            btnPlayTune.innerText = "▶ Tune";
        }
    })

}