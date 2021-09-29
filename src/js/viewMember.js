const tableViewMember = document.querySelector('#viewMember');
const popupViewMember = document.querySelector('#popupViewMember');
const closePopupViewMember = document.querySelector('#view-member__button--close');

tableViewMember.addEventListener('click', function(){
    popupViewMember.classList.remove("popup--close");
});

closePopupViewMember.addEventListener('click', function(){
    popupViewMember.classList.add("popup--close");
});
