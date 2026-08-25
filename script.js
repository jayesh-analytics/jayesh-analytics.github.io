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
    const navLinksList = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinksList.forEach(link => {
            link.style.color = "var(--text-main)";
            if (link.getAttribute("href").includes(current)) {
                link.style.color = "var(--neon-cyan)";
            }
        });
       // 3. iPhone Style Custom Smooth Scrolling (100% Working)
    document.querySelectorAll('.nav-links a, .hero-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 90;
                    const startPosition = window.scrollY;
                    const distance = targetPosition - startPosition;
                    let startTime = null;

                    function animation(currentTime) {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        
                        const progress = Math.min(timeElapsed / 800, 1);
                        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

                        window.scrollTo(0, startPosition + (distance * ease));

                        if (timeElapsed < 800) {
                            requestAnimationFrame(animation);
                        }
                    }
                    requestAnimationFrame(animation);
                }
            }
        });
    });

    // 3. Mobile Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinksMenu = document.getElementById('nav-links');

    if (hamburger && navLinksMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', () => {
            navLinksMenu.classList.toggle('active');
            
            // Icon change (Bars to X)
            const icon = hamburger.querySelector('i');
            if (navLinksMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinksList.forEach(item => {
            item.addEventListener('click', () => {
                navLinksMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 4. WhatsApp Integration
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents page reload

            // Get form data
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const message = document.getElementById('userMsg').value;

            // Format message for WhatsApp
            const whatsappText = `Hello Jayesh,%0A%0AI saw your portfolio and want to connect.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;

            // Your WhatsApp Number (Country code 91)
            const phoneNumber = "918302763167"; 

            // WhatsApp URL
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
            
            window.open(whatsappURL, '_blank');
        });
    }

});