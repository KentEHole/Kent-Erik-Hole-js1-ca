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
                const spaceXContaier = document.querySelector('.spacex__container');
            // Error box 
                const errorBox = document.querySelector('#error__box');
            // SpaceX details  
                const SpaceXD = document.querySelector('.SpaceX__details');
            // Loading 
                // Active  
                    const spaceXLoading = document.querySelector('#LoadingBox');
                
        // FOOTER 
            const footer = document.querySelector('footer');
        // Button
            // Error box close btn
                const errorboxBTN = document.querySelector('#error__btn')
        // Form
          // Form
          const form = document.querySelector('.form-contact');
          // Form Input Name
              const formIN = document.querySelector('#fullName');
          // Form NameText Required
              const formINT = document.querySelector('#fName');
          // Form Input Mail
              const formIM = document.querySelector('#mail');
          // Form MailText Required
              const formEM = document.querySelector('#email');
          // Form Input Address
              const formA = document.querySelector('#address');
          // Form AdressText Required
              const formAT = document.querySelector('#addressReq');
          // Form Input Subject
              const formS =  document.querySelector('#Subject');
          // Form Subject Required 
              const formST = document.querySelector('#SubjectReq');
          // Form Button
              const formBtn = document.querySelector('#form-submit');
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

    // Default text
        // Error API
            // Error Call API
                let errorAPI = `Fail calling API `;
                let errorMessageHead;
                let errorMessageSub; 
            
    const cpc = window.location.pathname;
    let siteName;

    

    
    
    
