// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {

    //Arrange
    // Set up your arguments and expectations

    const expected = {
        id: 1,
        name: 'kiwi',
        type: 'fruit',
        color: 'green',
        size: 5,
        fruitSalad: true,
        status: 'fresh',
        image: 'https://cdn.britannica.com/45/126445-004-90305E10/Kiwi-fruit.jpg',
        price: 5
    };
    const productData = [
        {
            id: 1,
            name: 'kiwi',
            type: 'fruit',
            color: 'green',
            size: 5,
            fruitSalad: true,
            status: 'fresh',
            image: 'https://cdn.britannica.com/45/126445-004-90305E10/Kiwi-fruit.jpg',
            price: 5
        },
        {
            id: 2,
            name: 'Banana',
            type: 'fruit',
            color: 'blue',
            size: 3,
            fruitSalad: true,
            status: 'fresh',
            image: 'https://image.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-260nw-1722111529.jpg',
            // price: 1
        },
        {
            id: 3,
            name: 'pineapple',
            type: 'fruit',
            color: 'yellow',
            size: 4,
            fruitSalad: false,
            status: 'fresh',
            image: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1902945.jpg',
            price: 2
        },

    ]

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(productData, 1);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);

});

