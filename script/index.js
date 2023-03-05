'use strict';

const navButtonB = document.querySelector('.navbar .fa-bars');
const navButtonX = document.querySelector('.navbar .fa-x');
const navMenu = document.querySelector('nav ul');
const nav = document.querySelector('.nav');
const backOpen = document.querySelector('.background-opacity-nav-open');

navButtonB.addEventListener('click', () => {
        nav.classList.add('show-nav');
        navMenu.classList.add('show');
        navMenu.classList.add('show-menu-responsive');
        navButtonB.classList.add('not-show');
        navButtonX.classList.remove('not-show');
        backOpen.classList.remove('not-show');
});

navButtonX.addEventListener('click', () => {
    console.log(navMenu.className);
    if (navMenu.className = 'show') {
        nav.classList.remove('show-nav');
        navMenu.classList.remove('show');
        navMenu.classList.remove('show-menu-responsive');
        navButtonB.classList.remove('not-show');
        navButtonX.classList.add('not-show');
        backOpen.classList.add('not-show');
    }
});

navMenu.addEventListener('click', () => {
    if (navMenu.className = 'show') {
        nav.classList.remove('show-nav');
        navMenu.classList.remove('show');
        navButtonB.classList.remove('not-show');
        navButtonX.classList.add('not-show');
        backOpen.classList.add('not-show');
    }
});

//Contact-me form

const sendBtn = document.querySelector('.send-btn');
const contactName = document.querySelector('.c-name');
const contactPhone = document.querySelector('.c-phone');
const contactEmail = document.querySelector('.c-email');
const messageName = document.querySelector('.f-name');
const messagePhone = document.querySelector('.f-phone');
const messageEmail = document.querySelector('.f-email');
const messageSubmit = document.querySelector('.submit-feedback');

sendBtn.addEventListener('click', () => {

    if (contactName.value.trim() <= 0 ) {
        messageName.style.display = 'block'
         } else { messageName.style.display = 'none';
     }

    if (contactPhone.value.trim() <= 0 ) {
        messagePhone.style.display = 'block'
        } else { messagePhone.style.display = 'none';
    }
    
    if (contactEmail.value.trim() <= 0 ) {
        messageEmail.style.display = 'block'
        } else { messageEmail.style.display = 'none';
    } 

    if (contactName.value.trim() ) {
        messageSubmit.style.display = 'block'
    }  else { messageSubmit.style.display = 'none';
    }
})