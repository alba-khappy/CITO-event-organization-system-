const select = document.querySelector('.select__main-item');
const selectList = document.querySelector('.select__items');
const selectItem = document.querySelector('.select__item');

select.innerHTML = selectItem.innerHTML;

select.addEventListener('click', function(){
    if(selectList.classList.contains('select--close')){
        selectList.classList.remove("select--close");
    } else {
        selectList.classList.add("select--close");
    }
});

selectItem.addEventListener('click', function(){
    select.innerHTML = selectItem.innerHTML;
});
