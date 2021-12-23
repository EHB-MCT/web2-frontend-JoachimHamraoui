import Masonry from 'masonry-layout';

window.onload = function () {

    let searchVillagerHtml = document.getElementById('search-villagers');
    let searchFishHtml = document.getElementById('search-fish');
    let searchBugsHtml = document.getElementById('search-bugs');
    let searchSeaHtml = document.getElementById('search-sea');
    let searchArtHtml = document.getElementById('search-art');

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
        displayFish();
    }

    async function displayFish() {
        const response = await fetch("https://web2-backend-joachimhamraoui.herokuapp.com/fish");
        const data = await response.json();

        console.log(data);

        for (let element in data) {

            let fish = data[element];

            let htmlString = `
            <a href="fish-info.html?item-id=${fish.id}" class="search-item">
            <div>
            <button id="deleteBtn" class="deleteBtn" value="${fish["_id"]}">X</button>
                <img src="${fish.icon}" alt="villager-image">
                <p>${fish.name}</p>
            </div>
        </a>`

            searchFishHtml.innerHTML += htmlString;
        }


        //even though our teacher explained it multiple times, I still struggled with making the eventlisteners work on each button, but it works!
        let deleteBtn = document.querySelectorAll('.deleteBtn');

        deleteBtn.forEach(deleteButton => {
            deleteButton.addEventListener("click", e => {
                e.preventDefault();
                console.log(deleteButton.value);
                const selectedId = deleteButton.value;

                fetch(`https://web2-backend-joachimhamraoui.herokuapp.com/fish/${selectedId}`, {
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
        displayBugs();
    }

    async function displayBugs() {
        const response = await fetch("https://web2-backend-joachimhamraoui.herokuapp.com/bugs");
        const data = await response.json();

        console.log(data);

        for (let element in data) {

            let bug = data[element];

            let htmlString = `
            <a href="fish-info.html?item-id=${bug.id}" class="search-item">
            <div>
            <button id="deleteBtn" class="deleteBtn" value="${bug["_id"]}">X</button>
                <img src="${bug.icon}" alt="villager-image">
                <p>${bug.name}</p>
            </div>
        </a>`

            searchBugsHtml.innerHTML += htmlString;
        }


        //even though our teacher explained it multiple times, I still struggled with making the eventlisteners work on each button, but it works!
        let deleteBtn = document.querySelectorAll('.deleteBtn');

        deleteBtn.forEach(deleteButton => {
            deleteButton.addEventListener("click", e => {
                e.preventDefault();
                console.log(deleteButton.value);
                const selectedId = deleteButton.value;

                fetch(`https://web2-backend-joachimhamraoui.herokuapp.com/bugs/${selectedId}`, {
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
        displayArt()
    }

    // async function displaySea() {
    //     const response = await fetch("https://web2-backend-joachimhamraoui.herokuapp.com/seacreatures");
    //     const data = await response.json();

    //     console.log(data);

    //     for (let element in data) {

    //         let seacreature = data[element];

    //         let htmlString = `
    //         <a href="fish-info.html?item-id=${seacreature.id}" class="search-item">
    //         <div>
    //         <button id="deleteBtn" class="deleteBtn" value="${seacreature["_id"]}">X</button>
    //             <img src="${seacreature.icon}" alt="villager-image">
    //             <p>${seacreature.name}</p>
    //         </div>
    //     </a>`

    //         searchSeaHtml.innerHTML += htmlString;
    //     }


    //     //even though our teacher explained it multiple times, I still struggled with making the eventlisteners work on each button, but it works!
    //     let deleteBtn = document.querySelectorAll('.deleteBtn');

    //     deleteBtn.forEach(deleteButton => {
    //         deleteButton.addEventListener("click", e => {
    //             e.preventDefault();
    //             console.log(deleteButton.value);
    //             const selectedId = deleteButton.value;

    //             fetch(`https://web2-backend-joachimhamraoui.herokuapp.com/seacreature/${selectedId}`, {
    //                 method: "DELETE",
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     id: selectedId
    //                 })
    //             }).then(response => {
    //                 return response.json()
    //             }).then(data => {
    //                 console.log('Succes: ', data);
    //             })

    //         })
    //     })
    // }
    // DROPPED SEACREATURES DUE TO MONGODB LIMITATIONS

    async function displayArt() {
        const response = await fetch("https://web2-backend-joachimhamraoui.herokuapp.com/art");
        const data = await response.json();

        console.log(data);

        for (let element in data) {

            let art = data[element];

            let htmlString = `
            <a href="fish-info.html?item-id=${art.id}" class="search-item">
            <div>
            <button id="deleteBtn" class="deleteBtn" value="${art["_id"]}">X</button>
                <img src="${art.image}" alt="villager-image">
                <p>${art.name}</p>
            </div>
        </a>`

            searchArtHtml.innerHTML += htmlString;
        }


        //even though our teacher explained it multiple times, I still struggled with making the eventlisteners work on each button, but it works!
        let deleteBtn = document.querySelectorAll('.deleteBtn');

        deleteBtn.forEach(deleteButton => {
            deleteButton.addEventListener("click", e => {
                e.preventDefault();
                console.log(deleteButton.value);
                const selectedId = deleteButton.value;

                fetch(`https://web2-backend-joachimhamraoui.herokuapp.com/art/${selectedId}`, {
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
    // displayFish();
    // displayBugs();
    // displaySea();
    // displayArt();

}