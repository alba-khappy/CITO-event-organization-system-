const buttonAddDistanceMember = document.querySelector('#addDistanceMember');
const popupAddDistanceAddMember = document.querySelector('#popupAddDistanceMember');
const closePopupDistanceMember = document.querySelector('#add-distance-member__button--close');

buttonAddDistanceMember.addEventListener('click', function(){
    popupAddDistanceMember.classList.remove("popup--close");
});

closePopupDistanceMember.addEventListener('click', function(){
    popupAddDistanceMember.classList.add("popup--close");
});
