import { fruit } from '../productsData.js';
import { cart } from './shoppingCartData.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';

const table = document.querySelector('table');

for (let cartItem of cart) {

    const matchingFruit = findById(fruit, cartItem.id);

    const tr = createTableRow(cartItem, matchingFruit);

    table.append(tr);
}

const totalRow = createTotalRow(cart, fruit);

table.append(totalRow);