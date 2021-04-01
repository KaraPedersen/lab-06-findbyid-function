// console.log('i am here');
// import { fruit } from '../products-data.js';
// console.log(fruit);
import { fruit } from '../productsData.js';

import { createFruitLi } from '../utils.js';
// import { createFruitLi } from '../utils.js';

// const ul = document.querySelector('.fruit-list');

for (let name of fruit) {
    const li = createFruitLi(name);
    ul.append(li);
}










