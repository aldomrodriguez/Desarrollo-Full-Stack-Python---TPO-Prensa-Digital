document.querySelector('.menu-button').addEventListener('click', function () {
    const menuButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.secciones_nav ul');

    menuButton.classList.toggle('active');
    menu.classList.toggle('show-menu');
});