document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});
//document.querySelector: para seleccionar elementos mediante selectores CSS.
//document.querySelector('.nav-menu').classList.toggle('show'): se llama al método classList.toggle('show') para cambiar la presencia de la clase show en la lista de clases del elemento. Si la clase show ya está presente, se eliminará; de lo contrario, se agregará. En resumen, este código alternará la clase show en el elemento con la clase .nav-menu cada vez que se haga clic en el elemento con la clase .menu-btn.

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});


