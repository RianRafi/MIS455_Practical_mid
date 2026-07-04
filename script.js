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
// Function 3: Handle Contact Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    if (name && email && subject) {
        const confirmMessage = `Thank you, ${name}!\n\nYour message has been submitted successfully.\nWe'll get back to you at ${email} within 24 hours.\n\nSubject: ${subject}`;
        alert(confirmMessage);
        
        // Reset form
        document.querySelector('.contact-form').reset();
        
        // Log to console
        console.log('Form submitted:', {name, email, subject});
    } else {
        alert('Please fill out all required fields.');
    }
}
// ========== Page Load Events ==========

// Log page visit
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded: ' + document.title);
    
    // Add smooth scroll behavior feedback
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
});