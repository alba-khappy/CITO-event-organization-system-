const tabsRequests = document.querySelector('.tabs_requests');
const tabsEvents = document.querySelector('.tabs_events');
const tabsEventsList = document.querySelector('.tabs-events-list');
const tabsRequestsList = document.querySelector('.tabs-requests-list');
const selectComponent = document.querySelector('.request__select');


tabsEvents.addEventListener('click', function(){
    tabsEvents.classList.add("tabs--active");
    tabsRequests.classList.remove("tabs--active");
    tabsEventsList.classList.add("tabs-list--active");
    tabsRequestsList.classList.remove("tabs-list--active");
    selectComponent.classList.add("select--close");
});


tabsRequests.addEventListener('click', function(){
    tabsRequests.classList.add("tabs--active");
    tabsEvents.classList.remove("tabs--active");
    tabsRequestsList.classList.add("tabs-list--active");
    tabsEventsList.classList.remove("tabs-list--active");
    selectComponent.classList.remove("select--close");
});
 