window.onload = function () {

    let selectedId = document.location.search.replace(/^.*?\=/, '');

    let searchItemHtml = document.getElementById('search-results');
    let searchBar = document.getElementById('search');
    async function searchEngine() {

        const response = await fetch(`http://acnhapi.com/v1/sea`);
        const data = await response.json();
        // console.log(data.birthday);

        searchBar.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                searchItemHtml.innerHTML = "";
                let inputValue = searchBar.value;

                // https://www.codegrepper.com/code-examples/javascript/javascript+add+underscore+to+string
                let searchResult = inputValue.replace(/ /g, "_");
                e.preventDefault();

                for (let element in data) {

                    let seacreature = data[element];

                    if (searchResult == seacreature["file-name"]) {

                        let htmlString = `<a href="seacreatures-info.html?item-id=${seacreature.id}" class="search-item">
                        <div>
                            <img src="https://acnhapi.com/v1/icons/sea/${seacreature.id}" alt="villager-image">
                            <p>${seacreature.name['name-EUen']}</p>
                        </div>
                    </a>`

                        searchItemHtml.innerHTML = htmlString;

                    }


                }


            }
        })

    }

    async function displaySearched() {

        const response = await fetch(`http://acnhapi.com/v1/sea/${selectedId}`);
        const data = await response.json();
        console.log(data.birthday);

        let infoHtml = document.getElementById('selected');

        let infoData = `<div id="arrow-back">
        <a href="./pages/seacreatures.html">K</a>
        </div>
        <section id="selected-ui2">
            <div id="selected-pic">
                <img src="https://acnhapi.com/v1/images/sea/${selectedId}" alt="a picture of fauna">
            </div>
            <div id="selected-info">
                <div id="selected-name">
                    <p>Name</p>
                    <h1>${data.name["name-EUen"]}</h1>
                </div>
                <div id="selected-cred">
                    <div>
                        <p>Location</p>
                        <h2>Ocean</h2>
                    </div>
                    <div>
                        <p>Speed</p>
                        <h2>${data.speed}</h2>
                    </div>
                    <div>
                        <p>Shadow</p>
                        <h2>${data.shadow}</h2>
                    </div>
                    <div>
                        <p>Price</p>
                        <h2>${data.price} Bells</h2>
                    </div>
                    <div id="description">
                        <p>Catchphrase</p>
                        <h3>${data["catch-phrase"]}</h3>
                    </div>
                    <div>
                        <a><button id="addItem">Add Fish</button></a>
                    </div>
                </div>
            </div>
        </section>`

        infoHtml.innerHTML = infoData;

        const addItemBtn = document.getElementById('addItem');

        // addItemBtn.addEventListener('click', e => {
        //     e.preventDefault()
        //     let itemId = data.id;
        //     let itemFilename = data["file-name"];
        //     let itemName = data.name["name-EUen"];
        //     let itemIcon = data["icon_uri"];

        //     console.log(itemId);
        //     console.log(itemFilename);
        //     console.log(itemName);
        //     console.log(itemIcon);

        //     fetch('https://web2-backend-joachimhamraoui.herokuapp.com/seacreature', {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             id: itemId,
        //             filename: itemFilename,
        //             name: itemName,
        //             icon: itemIcon
        //         })
        //     }).then(response => {
        //         return response.json()
        //     }).then(data => {
        //         console.log('Succes: ', data);
        //     })

        // })

    }


    searchEngine();
    displaySearched();
}