import { fruitData } from '../productsData.js';
import { cart } from './shoppingCartData.js';
import { createTableRow, booger, findById } from '../utils.js';
import { getCart } from '../getCart.js';

const submitButton = document.getElementById('submit');
//write get cart
const totalCart = getCart();
console.log(totalCart);

const table = document.querySelector('table');


for (let cartItem of totalCart) {

    const matchingFruit = findById(fruitData, cartItem.id);

    const tr = createTableRow(cartItem, matchingFruit);

    table.append(tr);
}

const totalRow = booger(totalCart, fruitData);

table.append(totalRow);

submitButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);
    localStorage.clear;
    // const cart = getCart();
    // console.log(cart);


    // alert(JSON.stringify(cart, null));

    localStorage.clear();

    window.location.href = '../index.html';
});
