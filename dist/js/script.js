const humbrger = document.querySelector('.humbrger'),
        menu = document.querySelector('.menu'),
        closeQ = document.querySelector('.menu_close');

humbrger.addEventListener('click', () => {
    menu.classList.add('active')
});


closeQ.addEventListener('click', () => {
    menu.classList.remove('active')
});

