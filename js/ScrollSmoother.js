let scrollSpeed = 0;
let scrolling = false

document.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollSpeed += event.deltaY * 0.1;
    if (!scrolling) animateScroll();
}, { passive: false });

function animateScroll() {
    scrolling = true;
    scrollSpeed *= 0.9;
    window.scrollBy(0, scrollSpeed);
    
    if (Math.abs(scrollSpeed) > 0.5) {
        requestAnimationFrame(animateScroll);
    } else {
        scrolling = false;
    }
}
