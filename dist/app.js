"use strict";var e=document.querySelector(".select__main-item"),t=document.querySelector(".select__items"),s=document.querySelector(".select__item");e.innerHTML=s.innerHTML,e.addEventListener("click",(function(){t.classList.contains("select--close")?t.classList.remove("select--close"):t.classList.add("select--close")})),s.addEventListener("click",(function(){e.innerHTML=s.innerHTML}));var c=document.querySelector(".tabs_requests"),i=document.querySelector(".tabs_events"),a=document.querySelector(".tabs-events-list"),l=document.querySelector(".tabs-requests-list");i.addEventListener("click",(function(){i.classList.add("tabs--active"),c.classList.remove("tabs--active"),a.classList.add("tabs-list--active"),l.classList.remove("tabs-list--active")})),c.addEventListener("click",(function(){c.classList.add("tabs--active"),i.classList.remove("tabs--active"),l.classList.add("tabs-list--active"),a.classList.remove("tabs-list--active")}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyIsInRhYnMuanMiXSwibmFtZXMiOlsic2VsZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0TGlzdCIsInNlbGVjdEl0ZW0iLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ0YWJzUmVxdWVzdHMiLCJ0YWJzRXZlbnRzIiwidGFic0V2ZW50c0xpc3QiLCJ0YWJzUmVxdWVzdHNMaXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxhQUVBLElBQUFBLEVBQUFDLFNBQUFDLGNBQUEsc0JBQ0FDLEVBQUFGLFNBQUFDLGNBQUEsa0JBQ0FFLEVBQUFILFNBQUFDLGNBQUEsaUJBQ0FGLEVBQUFLLFVBQUFELEVBQUFDLFVBQ0FMLEVBQUFNLGlCQUFBLFNBQUEsV0FDQUgsRUFBQUksVUFBQUMsU0FBQSxpQkFDQUwsRUFBQUksVUFBQUUsT0FBQSxpQkFFQU4sRUFBQUksVUFBQUcsSUFBQSxvQkFHQU4sRUFBQUUsaUJBQUEsU0FBQSxXQUNBTixFQUFBSyxVQUFBRCxFQUFBQyxhQ1pBLElBQUFNLEVBQUFWLFNBQUFDLGNBQUEsa0JBQ0FVLEVBQUFYLFNBQUFDLGNBQUEsZ0JBQ0FXLEVBQUFaLFNBQUFDLGNBQUEscUJBQ0FZLEVBQUFiLFNBQUFDLGNBQUEsdUJBQ0FVLEVBQUFOLGlCQUFBLFNBQUEsV0FDQU0sRUFBQUwsVUFBQUcsSUFBQSxnQkFDQUMsRUFBQUosVUFBQUUsT0FBQSxnQkFDQUksRUFBQU4sVUFBQUcsSUFBQSxxQkFDQUksRUFBQVAsVUFBQUUsT0FBQSx3QkFFQUUsRUFBQUwsaUJBQUEsU0FBQSxXQUNBSyxFQUFBSixVQUFBRyxJQUFBLGdCQUNBRSxFQUFBTCxVQUFBRSxPQUFBLGdCQUNBSyxFQUFBUCxVQUFBRyxJQUFBLHFCQUNBRyxFQUFBTixVQUFBRSxPQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbWFpbi1pdGVtJyk7XG52YXIgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2l0ZW1zJyk7XG52YXIgc2VsZWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2l0ZW0nKTtcbnNlbGVjdC5pbm5lckhUTUwgPSBzZWxlY3RJdGVtLmlubmVySFRNTDtcbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHNlbGVjdExpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLWNsb3NlJykpIHtcbiAgICBzZWxlY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3QtLWNsb3NlXCIpO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdExpc3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdC0tY2xvc2VcIik7XG4gIH1cbn0pO1xuc2VsZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0LmlubmVySFRNTCA9IHNlbGVjdEl0ZW0uaW5uZXJIVE1MO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0YWJzUmVxdWVzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFic19yZXF1ZXN0cycpO1xudmFyIHRhYnNFdmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFic19ldmVudHMnKTtcbnZhciB0YWJzRXZlbnRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzLWV2ZW50cy1saXN0Jyk7XG52YXIgdGFic1JlcXVlc3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzLXJlcXVlc3RzLWxpc3QnKTtcbnRhYnNFdmVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHRhYnNFdmVudHMuY2xhc3NMaXN0LmFkZChcInRhYnMtLWFjdGl2ZVwiKTtcbiAgdGFic1JlcXVlc3RzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzLS1hY3RpdmVcIik7XG4gIHRhYnNFdmVudHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YWJzLWxpc3QtLWFjdGl2ZVwiKTtcbiAgdGFic1JlcXVlc3RzTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwidGFicy1saXN0LS1hY3RpdmVcIik7XG59KTtcbnRhYnNSZXF1ZXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdGFic1JlcXVlc3RzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzLS1hY3RpdmVcIik7XG4gIHRhYnNFdmVudHMuY2xhc3NMaXN0LnJlbW92ZShcInRhYnMtLWFjdGl2ZVwiKTtcbiAgdGFic1JlcXVlc3RzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFicy1saXN0LS1hY3RpdmVcIik7XG4gIHRhYnNFdmVudHNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzLWxpc3QtLWFjdGl2ZVwiKTtcbn0pOyJdfQ==
