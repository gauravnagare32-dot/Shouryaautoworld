// script.js

// Function to load car inventory dynamically
function loadCarInventory() {
    fetch('api/cars') // replace with actual API
        .then(response => response.json())
        .then(data => {
            const inventoryContainer = document.getElementById('car-inventory');
            inventoryContainer.innerHTML = '';
            data.forEach(car => {
                const carElement = document.createElement('div');
                carElement.className = 'car';
                carElement.innerHTML = `<h3>${car.name}</h3><p>${car.description}</p>`;
                inventoryContainer.appendChild(carElement);
            });
        })
        .catch(error => console.error('Error loading inventory:', error));
}

// Function to toggle hamburger menu
function toggleMenu() {
    const menu = document.getElementById('hamburger-menu');
    menu.classList.toggle('open');
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
function validateForm(form) {
    let valid = true;
    const email = form['email'].value;
    const message = form['message'].value;
    if (!email || !message) {
        valid = false;
        alert('Please fill in all fields.');
    }
    return valid;
}

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (validateForm(form)) {
        // Submit form via AJAX or similar
        console.log('Form submitted successfully!');
    }
}

// Event listener for form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

// Load inventory on page load
window.onload = loadCarInventory;