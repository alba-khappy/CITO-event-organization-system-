const tabsRequests = document.querySelector('.tabs_requests');
const tabsEvents = document.querySelector('.tabs_events');

if (tabsRequests.classList.contains('tabs--active')) {
    tabsEvents.addEventListener('click', function(){
        tabsEvents.classList.add("tabs--active");
        tabsRequests.classList.remove("tabs--active");
    });
 } else if (tabsEvents.classList.contains('tabs--active')){
    tabsRequests.addEventListener('click', function(){
        tabsRequests.classList.add("tabs--active");
        tabsRequests.classList.remove("tabs--active");
    });
 }