import { getCart } from './getCart.js';
import { findById } from './utils.js';

export function setCart(receivedCart) {
    const storedCart = JSON.stringify(receivedCart);

    localStorage.setItem('CART', storedCart);
}




export function addItemToCart(itemId) {
    const cart = getCart();
    const itemMatch = findById(cart, itemId);
    if (itemMatch) {
        itemMatch.quantity++;
    } else {
        const newItem = {
            id: itemId, quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}