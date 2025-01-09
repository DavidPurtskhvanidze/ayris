document.addEventListener('DOMContentLoaded', () => {
    // Find all popups on the page
    const popups = document.querySelectorAll('.fn-popup');

    popups.forEach(popup => {
        const button = popup.querySelector('.fn-popup-button');
        const box = popup.querySelector('.fn-popup-box');

        // Open/close list by clicking on button
        button.addEventListener('click', () => {
            const isOpen = popup.classList.contains('open');
            closeAllPopups();
            if (!isOpen) {
                popup.classList.add('open');
                box.classList.add('open');
                //box.style.display = 'flex';
            }
        });

    });

    // Close all lists when clicking outside the zone
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.fn-popup')) {
            closeAllPopups();
        }
    });

    // Function to close all popups
    function closeAllPopups() {
        document.querySelectorAll('.fn-popup').forEach(popup => {
            popup.classList.remove('open');
            popup.classList.remove('open');
            popup.querySelector('.fn-popup-box').classList.remove('open');
        });
    }
});
