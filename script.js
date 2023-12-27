// scripts.js


function animateService(element) {
    element.style.backgroundColor = '#ddd';
}

function resetAnimation(element) {
    element.style.backgroundColor = '';
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)'; // Ingrandisce il testo al passaggio del mouse
            this.style.transition = 'transform 0.3s';
        });

        link.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)'; // Rimpicciolisce il testo al rilascio del mouse
            this.style.transition = 'transform 0.3s';
        });
    });
});





// Aggiunto la funzione toggleMobileMenu
function toggleMobileMenu() {
    var mobileMenuList = document.querySelector('.mobile-menu-list');
    mobileMenuList.classList.toggle('show');
}

// Aggiunto la funzione toggleMenu
function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('show');
}





