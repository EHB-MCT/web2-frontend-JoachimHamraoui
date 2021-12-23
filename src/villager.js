window.onload = function () {

    // let navigationScroll = document.querySelector('nav');

    // window.addEventListener('scroll', () => {
    //     console.log('Scrolled!')
    //     navigationScroll.setAttribute('class', 'background-nav')
    // })

    let selectedId = document.location.search.replace(/^.*?\=/, '');

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

                    let htmlString = `<a href="villager-info.html?item-id=${villager.id}" class="search-item">
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

    async function displayVillager() {

        const response = await fetch(`http://acnhapi.com/v1/villagers/${selectedId}`);
        const data = await response.json();
        console.log(data.birthday);

        let villagerHtml = document.getElementById('selected');

        let villagerData = `<div id="arrow-back">
        <a href="./villagers.html">❮</a>
        </div>
        <section id="selected-ui2">
            <div id="selected-pic">
                <img src="https://acnhapi.com/v1/images/villagers/${selectedId}" alt="a picture of fauna">
            </div>
            <div id="selected-info">
                <div id="selected-name">
                    <p>Name</p>
                    <h1>${data.name["name-EUen"]}</h1>
                </div>
                <div id="selected-cred">
                    <div>
                        <p>Birthday</p>
                        <h2>${data.birthday}</h2>
                    </div>
                    <div>
                        <p>Species</p>
                        <h2>${data.species}</h2>
                    </div>
                    <div>
                        <p>Gender</p>
                        <h2>${data.gender}</h2>
                    </div>
                    <div>
                        <p>Hobby</p>
                        <h2>${data.hobby}</h2>
                    </div>
                    <div>
                        <p>Personality</p>
                        <h2>${data.personality}</h2>
                    </div>
                    <div>
                        <a><button id="addItem">Add Villager</button></a>
                    </div>
                </div>
            </div>
        </section>`

        villagerHtml.innerHTML = villagerData;

        const addItemBtn = document.getElementById('addItem');

        addItemBtn.addEventListener('click', e => {
            e.preventDefault()
            let itemId = data.id;
            let itemFilename = data["file-name"];
            let itemName = data.name["name-EUen"];
            let itemIcon = data["icon_uri"];

            console.log(itemId);
            console.log(itemFilename);
            console.log(itemName);
            console.log(itemIcon);

            fetch('https://web2-backend-joachimhamraoui.herokuapp.com/villager', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: itemId,
                    filename: itemFilename,
                    name: itemName,
                    icon: itemIcon
                })
            }).then(response => {
                return response.json()
            }).then(data => {
                console.log('Succes: ', data);
            })

        })

    }

    searchVillagerEngine()
    displayVillager();

}