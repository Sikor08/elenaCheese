const burgerIcon = document.querySelector('.burger__icon');
const burgerContent = document.querySelector('.burgerContent')
burgerIcon.addEventListener('click', () => {
    burgerContent.classList.toggle('invisible')
})

