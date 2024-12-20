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


const linkPicturePlace = document.getElementById('linkPicturePlace');
const menuDropLink = document.querySelectorAll('.menu-drop__link');
menuDropLink.forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (link.classList.contains('menu-drop__link_underline')) return;
        const newImage = link.getAttribute('data-menu-drop-image');
        const newImageSrc = link.getAttribute('data-menu-drop-image');

        linkPicturePlace.innerHTML = `
            <source srcset="images/pictures/`+ newImage +`.webp" type="image/webp">
            <source srcset="images/pictures/`+ newImage +`.jpg" type="image/jpeg">
            <img src="images/pictures/`+ newImage +`.jpg" alt="Picture">
      `;

        menuDropLink.forEach(link => link.classList.remove('menu-drop__link_underline'));
        link.classList.add('menu-drop__link_underline');
    });
});

