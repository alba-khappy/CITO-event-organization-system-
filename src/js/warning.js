const today = document.querySelector('.calendar__today');
const popupWarning = document.querySelector('.warning');
const closePopup = document.querySelector('.warning__button--close-popup');

today.addEventListener('click', function(){
    popupWarning.classList.remove("warning--close");
});

closePopup.addEventListener('click', function(){
    popupWarning.classList.add("warning--close");
});
