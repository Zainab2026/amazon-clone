// JavaScript for handling the checkout process for comics

function processCheckout() {
    const customerName = document.getElementById('customer-name').value;
    const paymentInfo = document.getElementById('payment-info').value;

    if (customerName && paymentInfo) {
        alert(`Thank you for your purchase, ${customerName}!`);
        // Clear the cart after checkout
        cart = [];
        updateCartDisplay();
    } else {
        alert("Please fill in all fields.");
    }
}
