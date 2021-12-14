import Masonry from 'masonry-layout';

window.onload = function () {

    async function searchEngine(searchResult) {
        // const baseUrl = "http://acnhapi.com/v1/villagers/101";
        let searchItemHtml = document.getElementById('search-results');
        let searchBar = document.getElementById('search');

        const response = await fetch(`http://acnhapi.com/v1/villagers/${searchResult}`);
        const data = await response.json();
        console.log(data.birthday);

        let htmlString = `<a href="./" class="search-item">
        <div>
            <img src="https://acnhapi.com/v1/icons/villagers/${data.id}" alt="villager-image">
            <p>${data.name['name-EUen']}</p>
        </div>
    </a>`

        searchItemHtml.innerHTML = htmlString;
    }

    function searchItem() {
        searchBar.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                searchItemHtml.innerHTML = "";
                let inputValue = searchBar.value;
                console.log(inputValue);
                searchEngine(inputValue);
                e.preventDefault();
            }
        })
    }

    searchItem();

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