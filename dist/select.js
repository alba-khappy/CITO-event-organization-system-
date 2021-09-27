"use strict";

var selectComponents = document.querySelectorAll('.select__component');

var _loop = function _loop(i) {
  var currentSelect = selectComponents[i];
  var select = currentSelect.querySelector('.select__main-item');
  var selectList = currentSelect.querySelector('.select__list');
  var selectItems = selectList.querySelectorAll('.select__item');
  select.innerHTML = selectItems[0].innerHTML;
  select.addEventListener('click', function () {
    selectList.classList.toggle('select--close');
  });

  var _loop2 = function _loop2(_i) {
    selectItems[_i].addEventListener('click', function () {
      select.innerHTML = selectItems[_i].innerHTML;
    });
  };

  for (var _i = 0; _i < 3; _i++) {
    _loop2(_i);
  }
};

for (var i = 0; i < selectComponents.length; i++) {
  _loop(i);
} //
// select.innerHTML = selectItem[1].innerHTML;
//
// for (let i = 0; i < 3; i++) {
//     selectItem[i].addEventListener('click', function(){
//         select.innerHTML = selectItem[i].innerHTML;
//     });
// }
//
// select.addEventListener('click', function(){
//     selectList.classList.toggle('select--close')
// });
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzZWxlY3RDb21wb25lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fY29tcG9uZW50Jyk7XG5cbnZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3RDb21wb25lbnRzW2ldO1xuICB2YXIgc2VsZWN0ID0gY3VycmVudFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19tYWluLWl0ZW0nKTtcbiAgdmFyIHNlbGVjdExpc3QgPSBjdXJyZW50U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKTtcbiAgdmFyIHNlbGVjdEl0ZW1zID0gc2VsZWN0TGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19pdGVtJyk7XG4gIHNlbGVjdC5pbm5lckhUTUwgPSBzZWxlY3RJdGVtc1swXS5pbm5lckhUTUw7XG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3RMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdC0tY2xvc2UnKTtcbiAgfSk7XG5cbiAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihfaSkge1xuICAgIHNlbGVjdEl0ZW1zW19pXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSBzZWxlY3RJdGVtc1tfaV0uaW5uZXJIVE1MO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCAzOyBfaSsrKSB7XG4gICAgX2xvb3AyKF9pKTtcbiAgfVxufTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RDb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XG4gIF9sb29wKGkpO1xufSAvL1xuLy8gc2VsZWN0LmlubmVySFRNTCA9IHNlbGVjdEl0ZW1bMV0uaW5uZXJIVE1MO1xuLy9cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4vLyAgICAgc2VsZWN0SXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSBzZWxlY3RJdGVtW2ldLmlubmVySFRNTDtcbi8vICAgICB9KTtcbi8vIH1cbi8vXG4vLyBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgIHNlbGVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1jbG9zZScpXG4vLyB9KTtcbi8vIH0iXSwiZmlsZSI6InNlbGVjdC5qcyJ9
