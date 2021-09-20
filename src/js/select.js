const select = document.querySelector('.select__main-item');
const selectList = document.querySelector('.select__items');
const selectItem = document.querySelectorAll('.select__item');

select.innerHTML = selectItem[1].innerHTML;

for (let i = 0; i < 3; i++) {
    selectItem[i].addEventListener('click', function(){
        select.innerHTML = selectItem[i].innerHTML;
    });
}

select.addEventListener('click', function(){
    if(selectList.classList.contains('select--close')){
        selectList.classList.remove("select--close");
    } else {
        selectList.classList.add("select--close");
    }
});

