const buttonAddMember = document.querySelector('#addMember');
const popupAddMember = document.querySelector('#popupAddMember');
const closePopupAddMember = document.querySelector('#add-member__button--close');

buttonAddMember.addEventListener('click', function(){
    popupAddMember.classList.remove("popup--close");
});

closePopupAddMember.addEventListener('click', function(){
    popupAddMember.classList.add("popup--close");
});
