// Using strict mode 

// API for company and calling layout 
async function fetchSpaceXInfo(){
    try{
        const response = await fetch(URLS);
        const json = await response.json();
        
        const SpaceXInfo = json

        createLayout(SpaceXInfo);
        
    }catch(error){
        header.classList.add('.error');
        header.innerHTML += `${errorAPI}`;
    }
}

// API call for launches at SpaceX

async function fetchSpaceX(){
    try{
        const response = await fetch(URL);
        const json = await response.json();

        const spaceX = json;

        spaceX.forEach(function (space) {
            console.log(space.name)
            
        });

    }catch(error) {
        
    }
}

fetchSpaceX()