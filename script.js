const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('mainContactForm');

// Mobile menu open / close
hamburgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('mobile-visible');
});

// Link click ke baad menu band ho jaye
const menuLinks = navLinks.querySelectorAll('a');
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        navLinks.classList.remove('mobile-visible');
    });
}

// Contact form - page reload na ho
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
});