const selectComponents = document.querySelectorAll('.select__component');

for (let i=0; i<selectComponents.length; i++) {
    const currentSelect = selectComponents[i];
    const select = currentSelect.querySelector('.select__main-item');
    const selectList = currentSelect.querySelector('.select__list');
    const selectItems = selectList.querySelectorAll('.select__item');

    select.innerHTML = selectItems[0].innerHTML;

    select.addEventListener('click', function(){
        selectList.classList.toggle('select--close')
    });

    for (let i = 0; i < 3; i++) {
        selectItems[i].addEventListener('click', function(){
            select.innerHTML = selectItems[i].innerHTML;
        });
    }
}

