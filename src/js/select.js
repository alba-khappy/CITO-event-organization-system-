const selectComponent = document.querySelectorAll('.select__component');
const select = document.querySelectorAll('.select__main-item');
const selectList = document.querySelectorAll('.select__list');
const selectItem = document.querySelectorAll('.select__item');

for (i=0; i<selectComponent.length; i++) {

select.innerHTML = selectItem[1].innerHTML;

for (let i = 0; i < 3; i++) {
    selectItem[i].addEventListener('click', function(){
        select.innerHTML = selectItem[i].innerHTML;
    });
}

select.addEventListener('click', function(){
    selectList.classList.toggle('select--close')
});
}


