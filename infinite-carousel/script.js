document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    let slides = Array.from(track.children);

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    const cloneFirst = slides[0].cloneNode(true);
    const cloneLast = slides[slides.length - 1].cloneNode(true);

    track.append(cloneFirst);
    track.insertBefore(cloneLast, slides[0]);
    // Current Node Structure of Carousel Track = C -> A -> B -> C -> A
    
    slides = Array.from(track.children);
    // Update slides structure after append and insert

    let currentIndex = 1;       // Start at Original Slide 1
    let isMoving = false;

    function updateSlides(animate = true) {
        if (isMoving && animate) return;

        const slideWidth = slides[0].clientWidth;

        if (animate) {
            isMoving = true;

            prev.disabled = true;
            next.disabled = true;
        } 

        track.style.transition = animate ? 
            'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
            : 'none';

        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        
        if (!animate) {
            track.offsetHeight; 
        }
    }

    next.addEventListener('click', () => {
        if (currentIndex > slides.length - 1) return;

        currentIndex++;
        updateSlides();
    });

    prev.addEventListener('click', () => {
        if (currentIndex < 0) return;

        currentIndex--;
        updateSlides();
    });

    track.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;

        isMoving = false;

        prev.disabled = false;
        next.disabled = false;


        if (currentIndex === slides.length - 1) {
            currentIndex = 1;
            updateSlides(false);
        }

        if (currentIndex === 0) {
            currentIndex = slides.length - 2;
            updateSlides(false);
        }
    });

    // Initialize Slide 1
    updateSlides(false);
});