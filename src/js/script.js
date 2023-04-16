const hamburger = document.querySelector('.humbrger'),
     closeQ = document.querySelector('.menu_close'),
     menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

closeQ.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

