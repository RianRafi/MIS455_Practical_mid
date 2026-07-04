// Function 1: Show Welcome Message (Explore Products Button on Home Page)
function showWelcomeMessage() {
    const message = "Welcome to TechGear! 🚀\n\nThank you for your interest in our products. We offer premium tech solutions at competitive prices. Click OK to explore our full product catalog!";
    alert(message);
    
    // Redirect to products page
    window.location.href = "products.html";
}

// Function 2: Add to Cart (Product Page Buttons)
function addToCart(productName) {
    const cartMessage = `✅ ${productName} has been added to your cart!\n\nContinue shopping or proceed to checkout.`;
    alert(cartMessage);
    // Log to console for demonstration
    console.log(`Added to cart: ${productName}`);
}