import Masonry from 'masonry-layout';

window.onload = function () {

    let searchVillagerHtml = document.getElementById('search-villagers');

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



    async function displayVillagers() {
        const response = await fetch("https://web2-backend-joachimhamraoui.herokuapp.com/villagers");
        const data = await response.json();

        console.log(data);

        for (let element in data) {

            let villager = data[element];

            let htmlString = `
            <a href="villager-info.html?item-id=${villager.id}" class="search-item">
            <div>
            <button id="deleteBtn" class="deleteBtn" value="${villager["_id"]}">X</button>
                <img src="${villager.icon}" alt="villager-image">
                <p>${villager.name}</p>
            </div>
        </a>`

            searchVillagerHtml.innerHTML += htmlString;
        }


        //even though our teacher explained it multiple times, I still struggled with making the eventlisteners work on each button, but it works!
        let deleteBtn = document.querySelectorAll('.deleteBtn');

        deleteBtn.forEach(deleteButton => {
            deleteButton.addEventListener("click", e => {
                e.preventDefault();
                console.log(deleteButton.value);
                const selectedId = deleteButton.value;

                fetch(`https://web2-backend-joachimhamraoui.herokuapp.com/villager/${selectedId}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: selectedId
                    })
                }).then(response => {
                    return response.json()
                }).then(data => {
                    console.log('Succes: ', data);
                })

            })
        })
    }

    displayVillagers();

}