document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Fade-In on Scroll for all Glass Cards
    const cards = document.querySelectorAll('.glass');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(card);
    });

    // 2. Active Navbar Highlight based on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.style.color = "var(--text-main)";
            if (link.getAttribute("href").includes(current)) {
                link.style.color = "var(--neon-cyan)";
            }
        });
    });
});
// WhatsApp Integration
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // पेज को रीलोड होने से रोकेगा

    // फॉर्म का डेटा उठाना
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMsg').value;

    // WhatsApp के लिए मैसेज को फॉर्मेट करना
    const whatsappText = `Hello Jayesh,%0A%0AI saw your portfolio and want to connect.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;

    // तेरा WhatsApp नंबर (Country code 91 के साथ, बिना + लगाए)
    const phoneNumber = "918302763167"; 

    // WhatsApp वेब/ऐप ओपन करने का लिंक
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
    
    window.open(whatsappURL, '_blank');
});