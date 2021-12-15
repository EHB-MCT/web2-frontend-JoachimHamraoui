import Masonry from 'masonry-layout';

window.onload = function () {

    async function searchVillagerEngine() {
        let searchItemHtml = document.getElementById('search-results');
        let listSpecies = document.getElementById('search-villager');

        const response = await fetch(`http://acnhapi.com/v1/villagers`);
        const data = await response.json();
        // const readableData = data.data;
        // console.log(data.birthday);


        listSpecies.addEventListener('click', e => {
                searchItemHtml.innerHTML = "";
                let select = document.getElementById('villager-species');

                for (let element in data) {


                    // https://ricardometring.com/getting-the-value-of-a-select-in-javascript
                    let speciesValue = select.options[select.selectedIndex].value;

                    let villager = data[element];

                    if (speciesValue == villager.species) {

                        let htmlString = `<a href="villager-info.html/${villager.id}" class="search-item">
                            <div>
                                <img src="https://acnhapi.com/v1/icons/villagers/${villager.id}" alt="villager-image">
                                <p>${villager.name["name-EUen"]}</p>
                            </div>      
                        </a>`

                        searchItemHtml.innerHTML += htmlString;

                    }

                }

            e.preventDefault();
        })



    }

    async function searchEngine() {
        let searchItemHtml = document.getElementById('search-results');
        let searchBar = document.getElementById('search');

        const response = await fetch(`http://acnhapi.com/v1/villagers`);
        const data = await response.json();
        console.log(data.birthday);



        let htmlString = `<a href="" class="search-item">
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

    // searchEngine();

    searchVillagerEngine();

    // searchItem();

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