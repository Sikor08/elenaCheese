const burgerIcon = document.querySelector('.burger__icon');
const burgerContent = document.querySelector('.burgerContent')
burgerIcon.addEventListener('click', () => {
    burgerContent.classList.toggle('invisible')
})

const cards = document.querySelectorAll('.cardItem');
console.log(cards);
cards.forEach(card => {
    const id = crypto.randomUUID();
    card.setAttribute('id', id)  
});

const catalog = document.querySelector('.catalogWrap');
