"use strict";

var select = document.querySelector('.select__main-item');
var selectList = document.querySelector('.select__list');
var selectItem = document.querySelectorAll('.select__item');
select.innerHTML = selectItem[1].innerHTML;

var _loop = function _loop(i) {
  selectItem[i].addEventListener('click', function () {
    select.innerHTML = selectItem[i].innerHTML;
  });
};

for (var i = 0; i < 3; i++) {
  _loop(i);
}

select.addEventListener('click', function () {
  selectList.classList.toggle('select--close');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19tYWluLWl0ZW0nKTtcbnZhciBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpO1xudmFyIHNlbGVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19pdGVtJyk7XG5zZWxlY3QuaW5uZXJIVE1MID0gc2VsZWN0SXRlbVsxXS5pbm5lckhUTUw7XG5cbnZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgc2VsZWN0SXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3QuaW5uZXJIVE1MID0gc2VsZWN0SXRlbVtpXS5pbm5lckhUTUw7XG4gIH0pO1xufTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgX2xvb3AoaSk7XG59XG5cbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QtLWNsb3NlJyk7XG59KTsiXSwiZmlsZSI6InNlbGVjdC5qcyJ9
