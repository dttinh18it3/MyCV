const navSlide = () => {
    const toggleButton = document.querySelector('.toggleButton');
    const nav_links = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function NavigationResponsive() {
        nav_links.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        toggleButton.classList.toggle('toggle');
    }

    toggleButton.addEventListener('click', () => {
        NavigationResponsive();
    });

    const btnLogin = document.querySelector('.btnLogin');
    const formLoginPopup = document.querySelector('.loginFormPopup');
    const container = document.querySelector('.container');
    btnLogin.addEventListener('click', () => {
        formLoginPopup.classList.toggle('loginFormPopup-active');
        container.classList.toggle('container-active');
        registrationFormPopup.classList.remove('registrationFormPopup-active');
        
        nav_links.classList.remove('nav-active');
        toggleButton.classList.remove('toggle');

        navLinks.forEach((link) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }

        });
    })

    const btnCloseLoginForm = document.getElementById('btnClose');
    btnCloseLoginForm.addEventListener('click', () => {
        formLoginPopup.classList.remove('loginFormPopup-active');
        container.classList.remove('container-active');
    });

    const createAccount = document.getElementById('createAccount');
    const registrationFormPopup = document.querySelector('.registrationFormPopup');
    createAccount.addEventListener('click', () => {
        registrationFormPopup.classList.toggle('registrationFormPopup-active');
        formLoginPopup.classList.remove('loginFormPopup-active');
    });
    const btnCloseRegistrationForm = document.getElementById('btnCloseRegistration');
    btnCloseRegistrationForm.addEventListener('click', () => {
        registrationFormPopup.classList.remove('registrationFormPopup-active');
        container.classList.remove('container-active');
    });
}

navSlide();