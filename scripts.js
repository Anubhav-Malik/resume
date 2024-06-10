document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
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
