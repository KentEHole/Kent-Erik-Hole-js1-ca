// Global Values 

    // Using Strice mode 
        "use stric";

    // API Values 
        // MAIN API URL 
            const URL =  'https://api.spacexdata.com/v4/launches';
        // Secundery API URL
            const URLS = 'https://api.spacexdata.com/v4/company';
    // Document Object Model
        // BODY 
            const body = document.querySelector('body');
        // HEADER 
            const header =  document.querySelector('header');
        // NAVIGATION
            const nav = document.querySelector('nav'); 
        // NAVIGATION Logo
            const navLogo = document.querySelector('.nav__logo');
        // NAVIGATION LINK
            const navLink =  document.querySelector('.nav__link');
        // MAIN
            const main = document.querySelector('main');
            //SpaceX container
                const spaceXContaier = document.querySelector('.spacex__container"');
        // FOOTER 
            const footer = document.querySelector('footer');
    // ICON
        // TWITTER
            const iconTwitter = '<i class="fa-brands fa-twitter"></i>'; 
        // FLICER
            const iconFlickre = '<i class="fa-brands fa-flickr"></i>';
        // BROWSER
            const iconWebsit = '<i class="fa-solid fa-house-laptop"></i>';
        // HOME 
            const iconHome = '<i class="fa-solid fa-house"></i>';
        // CONTACT 
            const iconContact = '<i class="fa-solid fa-align-right"></i>';
        // ASTRONAUT
            const iconAstronaut = '<i class="fa-solid fa-user-astronaut"></i>';
    // COLOR PALLETS

        // Primary Colors 
            // Light 
                const colorPL = '#6384BF';
            // Main
                const colorP = '#425880';
            // Dark
                const colorPD = '#2E3D59';

        // Secondary color
            // Light 
                const colorSL = '';
            // Main 
                const colorS = '';
            // Dark 
                const colorSD = '';
        
        // Triangle Color 
            // Light 
            // main
            // Dark 
        // General Colour
            // Gray
                // Light 
                    const colorGL ='#E8E8E8'; 
                // Main 
                    const colorG = '#CFCFCF';
                // Dark 
                    const ColorGD = '#A8A8A8';
            // Red
                // Light
                    const colorRL = '#F50C00';
                // Main 
                    const colorR = '#E80C00'; 
                // Dark 
                    const ColorRD ='#A30900';
    // Default text
        // Error API
            // Error Call API
                let errorAPI = `Fail calling API `;
            
        
