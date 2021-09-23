const today = document.querySelector('.calendar__today');
const popupWarning = document.querySelector('#warning');
const closePopupWarning = document.querySelector('#warning__button--close');

today.addEventListener('click', function(){
    popupWarning.classList.remove("popup--close");
});

closePopupWarning.addEventListener('click', function(){
    popupWarning.classList.add("popup--close");
});
