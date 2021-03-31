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

    image.src = fruit.image;

    const pFruitSalad = document.createElement('p');
    pFruitSalad.textContent = fruit.canBeUsed ? 'Can be used in Fruit Salad' : 'This is the best way to eat it';

    const pStatus = document.createElement('p');

    pStatus.classList.add('status');
    pStatus.textContent = fruit.status;


    const pPrice = document.createElement('p');

    pPrice.textContent = fruit.price.toLocalString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const button = document.createElement('button');

    button.textContent = 'Add to cart';

    li.append(pName, pType, pSize, image, pFruitSalad, pStatus, pPrice, button);

    return li;

}

