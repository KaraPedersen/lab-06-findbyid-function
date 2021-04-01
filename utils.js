// export function findById(someArray, someId) {
//     for (let item of someArray) {
//         if (item.id === someId) {
//             return item;
//         }
//     }
// }

export function createFruitLi(fruit) {
    const li = document.createElement('li');

    li.classList.add('fruit');
    li.style.background = fruit.color;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = fruit.name;

    const pType = document.createElement('p');

    pType.classList.add('type');
    pType.textContent = fruit.type;

    const pSize = document.createElement('p');

    pSize.textContent = fruit.size;

    const image = document.createElement('img');
    image.classList.add('image');

    image.src = fruit.image;

    const pFruitSalad = document.createElement('p');
    pFruitSalad.textContent = fruit.canBeUsed ? 'Can be used in Fruit Salad' : 'This is the best way to eat it';

    const pStatus = document.createElement('p');

    pStatus.classList.add('status');
    pStatus.textContent = fruit.status;


    const pPrice = document.createElement('p');

    pPrice.textContent = fruit.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const button = document.createElement('button');

    button.textContent = 'Add to cart';

    li.append(pName, pType, pSize, image, pFruitSalad, pStatus, pPrice, button);

    return li;

}
export function createTableRow(someCartItem, someFruit) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = someFruit.name;
    tdQuantity.textContent = someCartItem.quantity;
    const total = someFruit.price * someCartItem.quantity;

    const config = {
        currency: 'USD',
        style: 'currency',
    };

    const totalAsUSD = total.toLocaleString('en-US', config);

    tdPrice.textContent = totalAsUSD;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function createTableRow(cartArray, fruitArray) {
    let sum = 0;

    for (let cartItem of cartArray) {

        const matchingFruit = findById(fruitArray, cartItem.id);

        const lineItem = matchingFruit.price * cartItem.quantity;

        sum = sum + lineItem;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);

    return tr;
};



return console.log('hello');

