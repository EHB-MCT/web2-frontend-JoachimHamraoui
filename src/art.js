window.onload = function () {

    let selectedId = document.location.search.replace(/^.*?\=/, '');

    let searchItemHtml = document.getElementById('search-results');
    //   
    async function searchEngine() {

        const response = await fetch(`http://acnhapi.com/v1/art`);
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

        const response = await fetch(`http://acnhapi.com/v1/art/${selectedId}`);
        const data = await response.json();
        console.log(data.birthday);

        let infoHtml = document.getElementById('selected');

        let infoData = `<div id="arrow-back">

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
                </div>
            </div>
        </section>`

        infoHtml.innerHTML = infoData;

    }


    searchEngine();
    displaySearched();
}