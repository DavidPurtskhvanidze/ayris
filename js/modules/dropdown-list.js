document.addEventListener('DOMContentLoaded', () => {
    // Find all dropdowns on the page
    const dropdowns = document.querySelectorAll('.fn-dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.fn-dropdown-button');
        const list = dropdown.querySelector('.fn-dropdown-list');
        const items = dropdown.querySelectorAll('.fn-dropdown-list-item');

        // Open/close list by clicking on button
        button.addEventListener('click', () => {
            const isOpen = dropdown.classList.contains('open');
            closeAllDropdowns(); // Закрываем все списки
            if (!isOpen) {
                dropdown.classList.add('open');
                list.style.display = 'flex';
            }
        });

        // Selecting an item from a list
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                // Change the button text to the text of the selected element
                button.textContent = event.target.textContent;

                // Remove the active class from all items
                items.forEach(i => i.classList.remove('active'));

                // Add the active class to the selected item
                event.target.classList.add('active');

                // We close the list
                dropdown.classList.remove('open');
                list.style.display = 'none';
            });
        });
    });

    // Close all lists when clicking outside the zone
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });

    // Function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('open');
            dropdown.querySelector('.dropdown__list').style.display = 'none';
        });
    }
});
