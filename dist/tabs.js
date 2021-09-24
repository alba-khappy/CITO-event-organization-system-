"use strict";

var tabsRequests = document.querySelector('.tabs_requests');
var tabsEvents = document.querySelector('.tabs_events');
var tabsEventsList = document.querySelector('.tabs-events-list');
var tabsRequestsList = document.querySelector('.tabs-requests-list');
tabsEvents.addEventListener('click', function () {
  tabsEvents.classList.add("tabs--active");
  tabsRequests.classList.remove("tabs--active");
  tabsEventsList.classList.add("tabs-list--active");
  tabsRequestsList.classList.remove("tabs-list--active");
});
tabsRequests.addEventListener('click', function () {
  tabsRequests.classList.add("tabs--active");
  tabsEvents.classList.remove("tabs--active");
  tabsRequestsList.classList.add("tabs-list--active");
  tabsEventsList.classList.remove("tabs-list--active");
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGFic1JlcXVlc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnNfcmVxdWVzdHMnKTtcbnZhciB0YWJzRXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnNfZXZlbnRzJyk7XG52YXIgdGFic0V2ZW50c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicy1ldmVudHMtbGlzdCcpO1xudmFyIHRhYnNSZXF1ZXN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicy1yZXF1ZXN0cy1saXN0Jyk7XG50YWJzRXZlbnRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB0YWJzRXZlbnRzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzLS1hY3RpdmVcIik7XG4gIHRhYnNSZXF1ZXN0cy5jbGFzc0xpc3QucmVtb3ZlKFwidGFicy0tYWN0aXZlXCIpO1xuICB0YWJzRXZlbnRzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFicy1saXN0LS1hY3RpdmVcIik7XG4gIHRhYnNSZXF1ZXN0c0xpc3QuY2xhc3NMaXN0LnJlbW92ZShcInRhYnMtbGlzdC0tYWN0aXZlXCIpO1xufSk7XG50YWJzUmVxdWVzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHRhYnNSZXF1ZXN0cy5jbGFzc0xpc3QuYWRkKFwidGFicy0tYWN0aXZlXCIpO1xuICB0YWJzRXZlbnRzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzLS1hY3RpdmVcIik7XG4gIHRhYnNSZXF1ZXN0c0xpc3QuY2xhc3NMaXN0LmFkZChcInRhYnMtbGlzdC0tYWN0aXZlXCIpO1xuICB0YWJzRXZlbnRzTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwidGFicy1saXN0LS1hY3RpdmVcIik7XG59KTsiXSwiZmlsZSI6InRhYnMuanMifQ==