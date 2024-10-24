document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    faders.forEach((fader) => {
        appearOnScroll.observe(fader);
    });
});

// Add fade-in effect on scroll untuk Moto
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in-left');
    const screenPos = window.innerHeight / 1.2;

    elements.forEach((element) => {
        const elementPos = element.getBoundingClientRect().top;
        if (elementPos < screenPos) {
            element.classList.add('visible');
        }
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
