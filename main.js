const burgerIconEl = document.querySelector('.fa-bars');

const burgerListEl =document.querySelector('.burgerContent');

burgerIconEl.addEventListener('click', () => {
    burgerListEl.classList.toggle('invisible')
})

const createProduct = (img, title, price, oldPrice) => {
    return {
        id: crypto.randomUUID(),
        img,
        title,
        price,
        oldPrice
    }
}

const products = [
    createProduct('img/good1.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good2.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good3.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good4.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good5.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good6.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good7.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good8.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
    createProduct('img/good9.jpg', 'Бри', `$ ${350} `, `$ ${400}`),
]
console.log(products)
const renderProduct =() => {
    for(let product of products){
const productItemEl = document.createElement('div');
        productItemEl.classList.add('cardItem');
        productItemEl.setAttribute('id', product.id);

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.classList.add('cardItem__img')
        productItemEl.append(productImg);

        const productTitleEl = document.createElement('p');
        productTitleEl.classList.add('cardItem__title');
        productTitleEl.textContent = product.title; 

        const productPriceEl = document.createElement('div');
        productPriceEl.classList.add('cardItem__price');
        productPriceEl.textContent = product.price;
        const oldPriceEl = document.createElement('span');
        oldPriceEl.classList.add('cardItem__Price');
        oldPriceEl.classList.add('cardItem__price_old');
        oldPriceEl.textContent = product.oldPrice;
        productPriceEl.append(oldPriceEl)
      
        const productBtn = document.createElement('button');
        productBtn.classList.add('cardItem__btn', 'buyBtn');
        productBtn.textContent = 'Купить';
        
        const cardItemContent = document.createElement('div');
        cardItemContent.classList.add('cardContent');
        cardItemContent.append(productTitleEl, productPriceEl, productBtn);
        productItemEl.append(cardItemContent)




        const cardBoxEl = document.querySelector('.catalogWrap')

        cardBoxEl.append(productItemEl);   
     }
}
renderProduct()
