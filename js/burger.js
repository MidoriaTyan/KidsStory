const modal = document.querySelector('.modal__burger')
const btn = document.querySelector('.burger__link').addEventListener('click', () => {
    modal.classList.toggle('open')
})

const  close = document.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('open')
})