document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation for sections
    const scrollSections = document.querySelectorAll('.scroll-section');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Typing effect for main title
    const typingTarget = document.querySelector('.typing-effect');
    const text = "끊임없이 도전하는 개발자, 김승식입니다."; // Change this text to your preference
    let i = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        typingTarget.innerHTML = text.substring(0, i);

        if (i < text.length) {
            i++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});