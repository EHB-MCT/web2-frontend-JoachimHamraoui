window.onload = function () {

    let selectedId = document.location.search.replace(/^.*?\=/, '');

    let searchItemHtml = document.getElementById('search-results');
    let searchBar = document.getElementById('search');
    async function searchEngine() {

        const response = await fetch(`http://acnhapi.com/v1/fish`);
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

                    let fish = data[element];

                    if (searchResult == fish["file-name"]) {

                        let htmlString = `<a href="fish-info.html?item-id=${fish.id}" class="search-item">
                        <div>
                            <img src="https://acnhapi.com/v1/icons/fish/${fish.id}" alt="villager-image">
                            <p>${fish.name['name-EUen']}</p>
                        </div>
                    </a>`

                        searchItemHtml.innerHTML = htmlString;

                    }


                }


            }
        })

    }

    async function displaySearched() {

        const response = await fetch(`http://acnhapi.com/v1/fish/${selectedId}`);
        const data = await response.json();
        console.log(data.birthday);

        let infoHtml = document.getElementById('selected');

        let infoData = `<div id="arrow-back">

        </div>
        <section id="selected-ui2">
            <div id="selected-pic">
                <img class="fish-photo" src="https://acnhapi.com/v1/images/fish/${selectedId}" alt="a picture of fauna">
            </div>
            <div id="selected-info">
                <div id="selected-name">
                    <p>Name</p>
                    <h1>${data.name["name-EUen"]}</h1>
                </div>
                <div id="selected-cred">
                    <div>
                        <p>Location</p>
                        <h2>${data.availability["location"]}</h2>
                    </div>
                    <div>
                        <p>Rarity</p>
                        <h2>${data.availability["rarity"]}</h2>
                    </div>
                    <div>
                        <p>Price</p>
                        <h2>${data.price} Bells</h2>
                    </div>
                    <div>
                        <p>Flick CJ</p>
                        <h2>${data["price-cj"]} Bells</h2>
                    </div>
                    <div id="description">
                        <p>Catchphrase</p>
                        <h3>${data["catch-phrase"]}</h3>
                    </div>
                </div>
            </div>
        </section>`

        infoHtml.innerHTML = infoData;

    }


    searchEngine();
    displaySearched();
}