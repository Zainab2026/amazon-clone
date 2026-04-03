// JavaScript for managing the comic cart functionality

let cart = [];

// Function to add comic to cart
function addToCart(comicId) {
    const comic = comics.find(c => c.id === comicId);
    if (comic) {
        cart.push(comic);
        updateCartDisplay();
    }
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear existing items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Function to get total price
function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}
