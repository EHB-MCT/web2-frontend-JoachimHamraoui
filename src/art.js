window.onload = function () {

    let navigationScroll = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        console.log('Scrolled!')
        navigationScroll.setAttribute('class', 'background-nav')
    })

    let selectedId = document.location.search.replace(/^.*?\=/, '');

    let searchItemHtml = document.getElementById('search-results');
    //   
    async function searchEngine() {

        const response = await fetch(`https://acnhapi.com/v1/art`);
        const data = await response.json();
        // console.log(data.birthday);

        for (let element in data) {

            let art = data[element];

            let htmlString = `<a href="art-info.html?item-id=${art.id}" class="search-item">
                <div>
                    <img src="https://acnhapi.com/v1/images/art/${art["file-name"]}" alt="villager-image">
                    <p>${art.name['name-EUen']}</p>
                </div>
            </a>`

            searchItemHtml.innerHTML += htmlString;

        }
    }

    async function displaySearched() {

        const response = await fetch(`https://acnhapi.com/v1/art/${selectedId}`);
        const data = await response.json();
        console.log(data.birthday);

        let infoHtml = document.getElementById('selected');

        let infoData = `<div id="arrow-back">
        <a href="./art.html">❮</a>
        </div>
        <section id="selected-ui2">
            <div id="selected-pic">
                <img class="art-img" src="https://acnhapi.com/v1/images/art/${data["file-name"]}" alt="a picture of fauna">
            </div>
            <div id="selected-info">
                <div id="selected-name">
                    <p>Name</p>
                    <h1>${data.name["name-EUen"]}</h1>
                </div>
                <div id="selected-cred">
                    <div>
                        <p>Buy Price</p>
                        <h2>${data["buy-price"]} Bells</h2>
                    </div>
                    <div>
                        <p>Sell Price</p>
                        <h2>${data["sell-price"]} Bells</h2>
                    </div>
                    <div id="description">
                        <p>Catchphrase</p>
                        <h3>${data["museum-desc"]}</h3>
                    </div>
                    <div>
                        <a><button id="addItem">Add Art</button></a>
                    </div>
                </div>
            </div>
        </section>`

        infoHtml.innerHTML = infoData;

        const addItemBtn = document.getElementById('addItem');

        addItemBtn.addEventListener('click', e => {
            e.preventDefault()
            let itemId = data.id;
            let itemFilename = data["file-name"];
            let itemName = data.name["name-EUen"];
            let itemImg = data["image_uri"];

            console.log(itemId);
            console.log(itemFilename);
            console.log(itemName);
            console.log(itemImg);

            fetch('https://web2-backend-joachimhamraoui.herokuapp.com/art', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: itemId,
                    filename: itemFilename,
                    name: itemName,
                    image: itemImg
                })
            }).then(response => {
                return response.json()
            }).then(data => {
                console.log('Succes: ', data);
            })

        })

    }


    searchEngine();
    displaySearched();
}