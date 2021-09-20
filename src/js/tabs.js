const tabsRequests = document.querySelector('.tabs_requests');
const tabsEvents = document.querySelector('.tabs_events');
const tabsEventsList = document.querySelector('.tabs-events-list');
const tabsRequestsList = document.querySelector('.tabs-requests-list');


    tabsEvents.addEventListener('click', function(){
        tabsEvents.classList.add("tabs--active");
        tabsRequests.classList.remove("tabs--active");
        tabsEventsList.classList.remove("tabs-list--close");
        tabsEventsList.classList.add("tabs-list--active");
    });


    tabsRequests.addEventListener('click', function(){
        tabsRequests.classList.add("tabs--active");
        tabsEvents.classList.remove("tabs--active");
        tabsRequestsList.classList.remove("tabs-list--close");
        tabsRequestsList.classList.add("tabs-list--active");
    });
 