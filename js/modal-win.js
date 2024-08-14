const linkAboutUs = document.querySelector('#aboutUs')  //кнопка 1
const linkSchedule = document.querySelector('#schedule') //кнопка 2
const linkProgram = document.querySelector('#program') //кнопка 3

const popapAboutUs = document.querySelector('.aboutUs')
const popapSchedule = document.querySelector('.schedule')
const popapProgram = document.querySelector('.program')

const fixed = document.querySelector('.fixed-top')

linkAboutUs.addEventListener('click', (event) => {
    event.preventDefault()
    if(popapSchedule.classList.contains('open') || popapProgram.classList.contains('open')){
        closeAllModal()
    }
    popapAboutUs.classList.toggle('open');
    togglePadding();
})

linkSchedule.addEventListener('click', (event) => {
    event.preventDefault()
    if(popapAboutUs.classList.contains('open') || popapProgram.classList.contains('open')){
        closeAllModal()
    }
    popapSchedule.classList.toggle('open')
    togglePadding();

})

linkProgram.addEventListener('click', (event) => {
    event.preventDefault()
    if(popapAboutUs.classList.contains('open') || popapSchedule.classList.contains('open')){
        closeAllModal()
    }
    popapProgram.classList.toggle('open')
    togglePadding();
})

// зактыть все окна
function closeAllModal(){
        popapAboutUs.classList.remove('open');
        popapSchedule.classList.remove('open');
        popapProgram.classList.remove('open');
    }

    function togglePadding() {
        if (popapAboutUs.classList.contains('open') || popapSchedule.classList.contains('open') || popapProgram.classList.contains('open')) {
            fixed.style.paddingBottom = '0';
        } else {
            fixed.style.paddingBottom = ''; // Возвращаем значение по умолчанию
        }
    }