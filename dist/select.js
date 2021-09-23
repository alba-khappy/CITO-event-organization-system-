"use strict";

var select = document.querySelector('.select__main-item');
var selectList = document.querySelector('.select__items');
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
  if (selectList.classList.contains('select--close')) {
    selectList.classList.remove("select--close");
  } else {
    selectList.classList.add("select--close");
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19tYWluLWl0ZW0nKTtcbnZhciBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faXRlbXMnKTtcbnZhciBzZWxlY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faXRlbScpO1xuc2VsZWN0LmlubmVySFRNTCA9IHNlbGVjdEl0ZW1bMV0uaW5uZXJIVE1MO1xuXG52YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gIHNlbGVjdEl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZWN0LmlubmVySFRNTCA9IHNlbGVjdEl0ZW1baV0uaW5uZXJIVE1MO1xuICB9KTtcbn07XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gIF9sb29wKGkpO1xufVxuXG5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChzZWxlY3RMaXN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1jbG9zZScpKSB7XG4gICAgc2VsZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0LS1jbG9zZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtLWNsb3NlXCIpO1xuICB9XG59KTsiXSwiZmlsZSI6InNlbGVjdC5qcyJ9
