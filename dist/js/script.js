const hamburger = document.querySelector('.humbrger'),
     closeQ = document.querySelector('.menu_close'),
     menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

closeQ.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.work_scale_item_header_percent'),
      lines = document.querySelectorAll('.work_scale_item_scale-orange');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
