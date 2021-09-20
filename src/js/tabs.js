const tabsRequests = document.querySelector('.tabs_requests');
const tabsEvents = document.querySelector('.tabs_events');


    tabsEvents.addEventListener('click', function(){
        tabsEvents.classList.add("tabs--active");
        tabsRequests.classList.remove("tabs--active");
    });


    tabsRequests.addEventListener('click', function(){
        tabsRequests.classList.add("tabs--active");
        tabsEvents.classList.remove("tabs--active");
    });
 