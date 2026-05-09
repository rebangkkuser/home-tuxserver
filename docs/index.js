// ============================================
// HOMESLASHTUXSERVER - INTERACTIVE FEATURES
// ============================================

// Smooth scroll for navigation links
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

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature items and cards
document.querySelectorAll('.feature-item, .about-card, .social-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--cyan)';
            link.style.textShadow = '0 0 20px rgba(0, 240, 255, 0.5)';
        } else {
            link.style.color = 'var(--text-light)';
            link.style.textShadow = 'none';
        }
    });
});

// Add interactive pulse effect on social cards
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.6s ease-out';
    });
});

// Add animation for glitch effect
const glitchElement = document.querySelector('.glitch');
if (glitchElement) {
    setInterval(() => {
        // Random glitch trigger
        if (Math.random() > 0.95) {
            glitchElement.style.animation = 'none';
            setTimeout(() => {
                glitchElement.style.animation = '';
            }, 10);
        }
    }, 3000);
}

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 240, 255, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Particle effect on button click (optional visual enhancement)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add pulse animation style dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
        }
        50% {
            box-shadow: 0 0 40px rgba(255, 0, 255, 0.7);
        }
        100% {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Random neon glow effect on load
window.addEventListener('load', () => {
    const colors = ['--cyan', '--magenta', '--lime'];
    let colorIndex = 0;
    
    setInterval(() => {
        const root = document.documentElement;
        const currentColor = colors[colorIndex % colors.length];
        colorIndex++;
    }, 5000);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'h' to go to home
    if (e.key.toLowerCase() === 'h') {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'c' to go to community
    if (e.key.toLowerCase() === 'c') {
        document.querySelector('#community').scrollIntoView({ behavior: 'smooth' });
    }
});

// Log a terminal message
console.log(`
 ╔═════════════════════════════════════════════════╗
 ║  Welcome to homeslashtuxserver                  ║
 ║  Join our Linux community today!               ║
 ║                                                 ║
 ║  Telegram: @homeslashtuxserver                 ║
 ║  Discord: https://discord.gg/y6gHeNQWP9       ║
 ║  Created by: @bangkkuser                       ║
 ╚═════════════════════════════════════════════════╝
`);
