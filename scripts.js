document.addEventListener('DOMContentLoaded', function () {
    // Example JavaScript effect: Fade in sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s';
    });

    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(fadeInSection, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
