const buttonAddDistanceMember = document.querySelector('#addDistanceMember');
const popupAddMember = document.querySelector('#popupAddDistanceMember');
const closePopupAddMember = document.querySelector('#add-distance-member__button--close');

buttonAddDistanceMember.addEventListener('click', function(){
    popupAddMember.classList.remove("popup--close");
});

buttonAddDistanceMember.addEventListener('click', function(){
    popupAddMember.classList.add("popup--close");
});
