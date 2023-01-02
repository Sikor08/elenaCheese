const burgerIconEl = document.querySelector('.fa-bars');

const burgerListEl =document.querySelector('.burgerContent');

burgerIconEl.addEventListener('click', () => {
    burgerListEl.classList.toggle('invisible')
})



