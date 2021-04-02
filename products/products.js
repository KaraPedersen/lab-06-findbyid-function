// console.log('i am here');
// import { fruit } from '../products-data.js';
// console.log(fruit);
import { fruitData } from '../productsData.js';

import { createFruitLi } from '../utils.js';
// import { createFruitLi } from '../utils.js';

const ul = document.querySelector('.fruit-list');

for (let name of fruitData) {
    const li = createFruitLi(name);
    ul.append(li);
}










