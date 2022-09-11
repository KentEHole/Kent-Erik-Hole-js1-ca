const urlSearch = document.location.search

const test = new URLSearchParams(urlSearch);

let id = test.get("id")

fetchSpaceXInfo()

async function fetchSpaceXDetails(){
    try {
        
        const response = await fetch(URL);
        const jons = await response.json()

        const spaceX = jons
        
        const index = spaceX.findIndex((spaceX) => spaceX.id === id);

        siteName = `${spaceX[index].name}`;
        setTimeout(() => {
            spaceXLoading.classList.remove('active');
            spaceXLoading.classList.add('hidden');
        
        header.innerHTML += `
            <h1>${spaceX[index].name}<h1>
        `
        
        SpaceXD.innerHTML += `
            <div>
                <div>
                    <img src="${spaceX[index].links.patch.small}" alt="Img of Patch ${spaceX[index].name}" class="SpaceX__details-img"/>
                    <p>${spaceX[index].details}<p>
                    <a href="${spaceX[index].links.wikipedia}" alt="Link to wikipedia">Wikipedia</a>
                    <a href="${spaceX[index].links.article}" alt="Link to article about ${spaceX[index].name}">Article</a>
                <div>
                    <h4>Youtube</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${spaceX[index].links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `
        }, 3000);


    }catch(error) {
        errorMessageHead = 'API fail'
        errorMessageSub = 'API to spaceX Launches failed to connect, Pleas try later!';
        CreateError(error);
    }
}

fetchSpaceXDetails()
