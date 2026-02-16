/* --- Typing Animation (Typed.js) --- */
const typed = new Typed('.multiple-text', {
    strings: [
        'A Frontend Developer',
        'Building Responsive Websites',
        'Making Modern Designs',
        'A UI Designer'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* --- Scroll Animations (IntersectionObserver) --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // 1. If element is in view -> animate it
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } 
        // 2. If element leaves view -> check position
        else {
            // Only reset animation if we scrolled UP (element is now below viewport)
            if (entry.boundingClientRect.top > 0) {
                entry.target.classList.remove('show-animate');
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.animate-scroll');
hiddenElements.forEach((el) => observer.observe(el));

/* --- Active Link Highlighting on Scroll --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Offset for better timing
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if current scroll position is within this section
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};