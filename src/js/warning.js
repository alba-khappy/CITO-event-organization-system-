const today = document.querySelector('.calendar__today');
const popupWarning = document.querySelector('.warning');

today.addEventListener('click', function(){
    popupWarning.classList.toggle("warning--close");
});
