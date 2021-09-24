"use strict";

var selectComponent = document.querySelectorAll('.select__component');
var select = document.querySelectorAll('.select__main-item');
var selectList = document.querySelectorAll('.select__list');
var selectItem = document.querySelectorAll('.select__item');

for (i = 0; i < selectComponent.length; i++) {
  select.innerHTML = selectItem[1].innerHTML;

  var _loop = function _loop(_i) {
    selectItem[_i].addEventListener('click', function () {
      select.innerHTML = selectItem[_i].innerHTML;
    });
  };

  for (var _i = 0; _i < 3; _i++) {
    _loop(_i);
  }

  select.addEventListener('click', function () {
    selectList.classList.toggle('select--close');
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzZWxlY3RDb21wb25lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19jb21wb25lbnQnKTtcbnZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19tYWluLWl0ZW0nKTtcbnZhciBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fbGlzdCcpO1xudmFyIHNlbGVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19pdGVtJyk7XG5cbmZvciAoaSA9IDA7IGkgPCBzZWxlY3RDb21wb25lbnQubGVuZ3RoOyBpKyspIHtcbiAgc2VsZWN0LmlubmVySFRNTCA9IHNlbGVjdEl0ZW1bMV0uaW5uZXJIVE1MO1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgc2VsZWN0SXRlbVtfaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxlY3QuaW5uZXJIVE1MID0gc2VsZWN0SXRlbVtfaV0uaW5uZXJIVE1MO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCAzOyBfaSsrKSB7XG4gICAgX2xvb3AoX2kpO1xuICB9XG5cbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1jbG9zZScpO1xuICB9KTtcbn0iXSwiZmlsZSI6InNlbGVjdC5qcyJ9
