export function getCart() {
    const storeCart = localStorage.getItem('CART');
    const receivedCart = JSON.parse(storeCart);
    if (receivedCart) {
        return receivedCart;
    } else {
        return [];
    }
}