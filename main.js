const burgerIconEl = document.querySelector('.fa-bars');

const burgerListEl =document.querySelector('.burgerContent');

burgerIconEl.addEventListener('click', () => {
    burgerListEl.classList.toggle('invisible')
})

const btnMinusEl = document.querySelector('.btnMinus');
btnMinusEl.setAttribute('disabled', '');
const btnPlusEl = document.querySelector('.btnPlus');
const stepperinputEl = document.querySelector('#stepperInput');

stepperinputEl.value = '1';

let count = stepperinputEl.value
stepperinputEl.addEventListener('keyup', (e) => {
    if(stepperinputEl.value >= 10){
        stepperinputEl.value = 10
    }
})

btnPlusEl.addEventListener('click', () => {
    count ++ 
    stepperinputEl.value = count;
    if(count > 1){
        btnMinusEl.removeAttribute('disabled', '');
    }
    if(count >= 10){
        btnPlusEl.setAttribute('disabled', '');
    }
})
btnMinusEl.addEventListener('click', () => {
    count -- 
    stepperinputEl.value = count;
    btnPlusEl.removeAttribute('disabled', '');

    if(count <= 1){
        btnMinusEl.setAttribute('disabled', '');

    }
})
