let lastScrollLeft = 0;

window.addEventListener('scroll', function() {
    let currentScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    if (currentScrollLeft > lastScrollLeft) {
        // Scrolling right (towards inside)
        document.getElementById('menuopen').style.left = '0';
    } else {
        // Scrolling left (towards outside)
        document.getElementById('menuopen').style.left = '-70%';
    }

    lastScrollLeft = currentScrollLeft <= 0 ? 0 : currentScrollLeft; // For Mobile or negative scrolling
});