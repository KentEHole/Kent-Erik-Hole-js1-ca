// Using stric mode 
    'use strice';


function createLayout(APIInfo){
    try{
        const SpaceXInfo =  APIInfo; 

    header.innerHTML += `
        <h2>${SpaceXInfo.name}</h2>
        <h3>${SpaceXInfo.summary}<h3>
    `;

    footer.innerHTML += `
        <ul>
            <li>
                <a href="${SpaceXInfo.links.twitter}" alt="Link to twitter of SpaceX">${iconTwitter}</a>
            </li>
            <li>
                <a href="${SpaceXInfo.links.flicker}" alt="Link to Flicker of SpaceX">${iconFlicker}</a> 
            </li>
            <li>
                <a href="${SpaceXInfo.links.website}" alt="Link to website of SpaceX">${iconWebSit}</a>
            </li>
        </ul>
        <ul>
            <li>Ceo></li>
            <li>${SpaceXInfo.ceo}</li>
            <li>Employees</li>
            <li>${SpaceXInfo.employess}</li>
        </ul>
        <ul>
            <li>${SpaceXInfo.headquarters.address}</li>
            <li>${SpaceXInfo.headquarters.city}</li>
            <li>${SpaceXInfo.headquarters.state}</li>
        </ul>
    `;
    }catch(error) {
        console.log(error)

    }
}

fetchSpaceXInfo()