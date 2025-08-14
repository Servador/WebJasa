// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || this.querySelector('input[type="text"]').value;
    const email = formData.get('email') || this.querySelector('input[type="email"]').value;
    const phone = formData.get('phone') || this.querySelector('input[type="tel"]').value;
    const service = formData.get('service') || this.querySelector('select').value;
    const message = formData.get('message') || this.querySelector('textarea').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Halo ServadorCorp! 👋

Saya tertarik dengan layanan website Anda.

*Detail Informasi:*
📝 Nama: ${name}
📧 Email: ${email}
📱 WhatsApp: ${phone}
🎯 Layanan: ${service}

*Pesan:*
${message}

Mohon informasi lebih lanjut. Terima kasih! 🙏`;
    
    // WhatsApp API URL
    const whatsappURL = `https://wa.me/6282129837460?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    this.reset();
    
    // Show success message (optional)
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.');
});

// WhatsApp buttons functionality
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('WhatsApp') || btn.textContent.includes('Konsultasi')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = "Halo WebCreative! Saya tertarik dengan layanan pembuatan website. Bisa konsultasi gratis?";
            const whatsappURL = `https://wa.me/6282129837460?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    }
});

// Portfolio button functionality
document.querySelectorAll('.btn-outline').forEach(btn => {
    if (btn.textContent.includes('Portofolio')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#portofolio').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .service-card, .portfolio-item, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(30, 41, 59, 0.95)';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.8)';
    }
});

// Add loading effect
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initial page load
document.body.style.opacity = '0';