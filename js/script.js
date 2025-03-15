document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (event) => {
    if (hamburger.classList.contains('active') && 
        !event.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const response = await fetch('https://api.cloudflare.com/client/v4/...', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'API-Key': 'your-cloudflare-api-key'
                },
                body: JSON.stringify({
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value
                })
            });

            if(response.ok) {
                alert('Message sent successfully!');
                form.reset();
            }
        });
    }
});