// Using strict mode 

// API for company and calling layout 

async function fetchSpaceXInfo(){
    try{
        const response = await fetch(URLS);
        const json = await response.json();
        
        const SpaceXInfo = json

        createLayout(SpaceXInfo);
        
    }catch(error){
        errorMessageHead = 'API fail'
        errorMessageSub = 'API to spaceX Company failed to connect, Pleas try later!';
        CreateError(error);
    }
}

// API call for launches at SpaceX
 
async function fetchSpaceX(){
    try{
        const response = await fetch(URL);
        const jons = await response.json();

        const spaceX = jons;
        
        setTimeout(() => {
            
            spaceXLoading.classList.remove('active');
            spaceXLoading.classList.add('hidden');

        
         spaceX.forEach(function(space) {
            
            if(space.id && space.links.patch.small && space.name && space.details ){
                
                spaceXContaier.innerHTML += `
                <a href="details.html?id=${space.id}" class="spaceX__item">
                <div class="SpaceX__item-name">
                        <h3 class="headline">${space.name}</h3>
                    </div>
                    <div  class="spaceX__item_boximg">
                        <img src="${space.links.patch.small}" class="space__item-img" alt="You see the ${space.name}"/>
                    </div>
                    <div class="SpaceX__item-details">
                        <p class="callout">${space.details}</p>
                    </div>
                </a>
            `
            }
            
        });
    }, 2300);
        

    }catch(error) {
        errorMessageHead = 'API fail'
        errorMessageSub = 'API to spaceX Launches failed to connect, Pleas try later!';
        CreateError(error);
        
    }
}



