const header = document.querySelector('.header');

function headerBgColorSwitcher() {
    if (window.scrollY > 50) {
        header.classList.add('header_color-active');
    } else {
        header.classList.remove('header_color-active');
    }
}

window.addEventListener('DOMContentLoaded', headerBgColorSwitcher);
window.addEventListener('scroll', headerBgColorSwitcher);
