document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('cross');
        menu.classList.toggle('open');
    });
});