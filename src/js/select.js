const select = document.querySelector('.select__main-item');
const selectList = document.querySelector('.select__list');
const selectItem = document.querySelectorAll('.select__item');

select.innerHTML = selectItem[1].innerHTML;

for (let i = 0; i < 3; i++) {
    selectItem[i].addEventListener('click', function(){
        select.innerHTML = selectItem[i].innerHTML;
    });
}

select.addEventListener('click', function(){
    selectList.classList.toggle('select--close')
});

