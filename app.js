// Main JavaScript file to handle comic data and interactions

// Sample comic data with images and descriptions
const comics = [
    { id: 1, name: "Comic 1", price: 5.99, description: "Description for Comic 1", image: "https://example.com/comic1.jpg" },
    { id: 2, name: "Comic 2", price: 6.99, description: "Description for Comic 2", image: "https://example.com/comic2.jpg" },
    { id: 3, name: "Comic 3", price: 7.99, description: "Description for Comic 3", image: "https://example.com/comic3.jpg" },
    { id: 4, name: "Comic 4", price: 8.99, description: "Description for Comic 4", image: "https://example.com/comic4.jpg" },
    { id: 5, name: "Comic 5", price: 9.99, description: "Description for Comic 5", image: "https://example.com/comic5.jpg" },
];

console.log("Displaying comics..."); // Debugging log
console.log("Displaying comics..."); // Debugging log
// Function to display comics


function displayComics() {
    console.log("Displaying comics..."); // Debugging log
    const productList = document.getElementById('product-list').querySelector('.product-grid');
    comics.forEach(comic => {
        console.log(`Comic ID: ${comic.id}, Name: ${comic.name}`); // Debugging log

        console.log(`Comic ID: ${comic.id}, Name: ${comic.name}`); // Debugging log

        const comicItem = document.createElement('div');
        comicItem.innerHTML = `
            <div class="product-card">
                <img src="${comic.image}" alt="${comic.name}" class="product-image">
                <h3 class="product-title">${comic.name}</h3>
                <p class="product-price">$${comic.price.toFixed(2)}</p>
                <p class="product-description">${comic.description}</p>
                <button onclick="addToCart(${comic.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(comicItem);
    });
}

// Call displayComics on page load
window.onload = displayComics;
