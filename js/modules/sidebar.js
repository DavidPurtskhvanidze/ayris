document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.fn-sidebar');
    const overlay = document.querySelector('.fn-overlay');
    const openButton = document.querySelector('.fn-open-sidebar');
    const closeButton = document.querySelector('.fn-close-sidebar');

    // Sidebar open function
    const openSidebar = () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Sidebar close function
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    openButton.addEventListener('click', openSidebar);
    closeButton.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Closing the sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !openButton.contains(e.target) && overlay.classList.contains('active')) {
            closeSidebar();
        }
    });
});