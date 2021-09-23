const sectionCheckbox1= document.querySelector('#checkbox-19');
const sectionCheckbox2= document.querySelector('#checkbox-20');
const parametersContainer = document.querySelector('.parameters__inner-container');
const polygraphyContainer = document.querySelector('.polygraphy__inner-container');


sectionCheckbox1.addEventListener('click', function(){
    parametersContainer.classList.toggle("close-section");
});

sectionCheckbox2.addEventListener('click', function(){
    polygraphyContainer.classList.toggle("close-section");
});