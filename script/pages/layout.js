function createLayout(APIInfo){
    try{
        const SpaceXInfo =  APIInfo; 
        

        header.innerHTML += `
            <div id="header__textbox">
                <h1>
                    <span class="heading__main">${siteName}</span>
                    <br>
                    <span class="heading__sub">${SpaceXInfo.summary}</span>
                </h1>
            </div>
        `;

    footer.innerHTML += `
        <ul>
            <li>
                <h4>Social Media</h4>
            </li>
            <li>
                <a href="${SpaceXInfo.links.twitter}" alt="Link to twitter of SpaceX">${iconTwitter} Twitter</a>
            </li>
            <li>
                <a href="${SpaceXInfo.links.flicker}" alt="Link to Flicker of SpaceX">${iconFlickre} Flicker</a> 
            </li>
            <li>
                <a href="${SpaceXInfo.links.website}" alt="Link to website of SpaceX">${iconWebsit} website</a>
            </li>
        </ul>
        <ul>
            <li>
                <h4>Company Info</h4>
            </li>
            <li>Ceo</li>
            <li>${SpaceXInfo.ceo}</li>
            <li>Employees</li>
            <li>${SpaceXInfo.employees}</li>
        </ul>
        <ul>
            <li>
                <h4>Company Address</h4>
            </li>
            <li>${SpaceXInfo.headquarters.address}</li>
            <li>${SpaceXInfo.headquarters.city}</li>
            <li>${SpaceXInfo.headquarters.state}</li>
        </ul>
    `;
    }catch(error) {
        console.log(error)

    }
}

const spaceXPageName = function() {
        
    cpc 

    if(cpc == '/index.html') {
        return siteName = 'HOME'; 
    }if(cpc =='/contact.html') {
        return siteName = 'CONTACT US';
    }else {
        // NEW FUNCTION 
        return siteName = '';
    }
    
}

function CreateError(Error){
    const erorrMessage = Error;
    spaceXLoading.classList.remove('active');
    spaceXLoading.classList.add('hidden');

    main.innerHTML += `
    <div class="error" id="error__box">
        <ul class="Error__List">
            <li>
                <h3>${errorMessageHead}</h3>
            </li>
            <li>
                <button id="#error__btn" onclick="closeErrorBox()" type="button"><i class="fa-solid fa-xmark"></i></button>
            </li>
        </ul>
        <p>${errorMessageSub}</p>
        <p>Error Message: ${erorrMessage}</p>
</div>
        `
}


function closeErrorBox(){
    errorBox.classList.toggle('error');
    errorBox.classList.add('hidden');
}


spaceXPageName()
