import { fruit } from '../products.js';
import { createFruitLi } from '../utils.js';

console.log(fruit);

const ul = document.querySelector('.fruit-list');

for (let frui of fruit) {
    const li = createFruitLi(frui);
    ul.append(li);
}










