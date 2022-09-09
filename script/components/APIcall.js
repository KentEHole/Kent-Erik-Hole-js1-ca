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