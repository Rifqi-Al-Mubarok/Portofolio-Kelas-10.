// ============================================
// 1. INITIALIZATION & LOADER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after page loads
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
    
    // Initialize all functions
    initCustomCursor();
    initThemeToggle();
    initNavbarScroll();
    initMobileMenu();
    initScrollAnimations();
    initCertificateModal();
    initVideoLinks();
    initTypewriterEffect();
    initHoverEffects();
    initDynamicContent();
    initSmoothScrolling();
    initPerformanceOptimization();
    initAccessibilityFeatures();
    initErrorHandling();
    initConfettiEffect();
    initDecorationEffects();
    initHeroPhotoInteraction();
    initContactActions();
    initSkillButtons();
    
    // Log initialization complete
    console.log('Portfolio Premium fully loaded!');
});

// ============================================
// 2. CUSTOM CURSOR
// ============================================

function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 80);
    });
    
    // Cursor effects on different elements
    const interactiveElements = document.querySelectorAll('a, button, .certificate-item, .video-item, .poster-item, .social-icon, .theme-toggle, .skill-card, .contact-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.style.transform = 'scale(2.5)';
            cursor.style.background = 'var(--accent-color)';
            follower.style.transform = 'scale(1.8)';
            follower.style.borderColor = 'rgba(255, 65, 108, 0.9)';
            follower.style.boxShadow = '0 0 20px rgba(255, 65, 108, 0.7)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'var(--gradient-primary)';
            follower.style.transform = 'scale(1)';
            follower.style.borderColor = 'rgba(255, 65, 108, 0.7)';
            follower.style.boxShadow = '0 0 15px rgba(255, 65, 108, 0.5)';
        });
    });
    
    // Click effect
    document.addEventListener('click', function() {
        cursor.style.transform = 'scale(0.7)';
        setTimeout(() => {
            cursor.style.transform = 'scale(1)';
        }, 150);
    });
}

// ============================================
// 3. THEME TOGGLE (DARK/LIGHT MODE)
// ============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggle.style.background = 'var(--gradient-secondary)';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggle.style.background = 'var(--gradient-secondary)';
            localStorage.setItem('theme', 'dark');
            createConfetti();
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggle.style.background = 'var(--gradient-primary)';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Listen for OS theme changes
    prefersDarkScheme.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                themeToggle.style.background = 'var(--gradient-secondary)';
            } else {
                document.body.classList.remove('dark-mode');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                themeToggle.style.background = 'var(--gradient-primary)';
            }
        }
    });
}

// ============================================
// 4. NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background when scrolling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
            header.style.opacity = '0';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ============================================
// 5. MOBILE MENU
// ============================================

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const hamburgerIcon = hamburger.querySelector('i');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        });
    });
}

// ============================================
// 6. SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .rotate-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Animate elements on scroll with different delays
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.3}s`;
    });
    
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.3}s`;
    });
}

// ============================================
// 7. CERTIFICATE MODAL
// ============================================

function initCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImg');
    const modalClose = document.getElementById('modalClose');
    const certificateItems = document.querySelectorAll('.certificate-item');
    
    certificateItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '12px'; // Prevent layout shift
        });
    });
    
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        }
    });
}

// ============================================
// 8. VIDEO LINKS
// ============================================

function initVideoLinks() {
    const videoItems = document.querySelectorAll('.video-item');
    const videoIds = [
        'dQw4w9WgXcQ',
        '9bZkp7q19f0',
        'JGwWNGJdvx8',
        'kJQP7kiw5Fk',
        'OPf0YbXqDm0',
        '09R8_2nJtjg',
        'CduA0TULnow',
        'mWRsgZuwf_8',
        'LjhCEhWiKXk',
        'VYOjWnS4cMY'
    ];
    
    videoItems.forEach((item, index) => {
        if (index < videoIds.length) {
            item.addEventListener('click', function() {
                window.open(`https://www.youtube.com/watch?v=${videoIds[index]}`, '_blank');
            });
        }
    });
}

// ============================================
// 9. TYPEWRITER EFFECT
// ============================================

function initTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-text h1');
    
    // Reset animation
    setTimeout(() => {
        heroTitle.classList.remove('typewriter');
        void heroTitle.offsetWidth;
        heroTitle.classList.add('typewriter');
    }, 100);
    
    // Repeat animation every 15 seconds
    setInterval(() => {
        heroTitle.classList.remove('typewriter');
        void heroTitle.offsetWidth;
        heroTitle.classList.add('typewriter');
    }, 15000);
}

// ============================================
// 10. HOVER EFFECTS
// ============================================

function initHoverEffects() {
    // Enhanced glow effect on hover
    const glowElements = document.querySelectorAll('.glow');
    
    glowElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.classList.add('neon-box');
        });
        
        el.addEventListener('mouseleave', function() {
            this.classList.remove('neon-box');
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 11. DYNAMIC CONTENT
// ============================================

function initDynamicContent() {
    // Update copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    // Add visitor counter
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    // Display visit count in console
    console.log(`You've visited this portfolio ${visitCount} time${visitCount !== 1 ? 's' : ''}!`);
}

// ============================================
// 12. SMOOTH SCROLLING
// ============================================

function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// 13. PERFORMANCE OPTIMIZATION
// ============================================

function initPerformanceOptimization() {
    // Lazy load images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Handle scroll operations
        }, 100);
    });
    
    // Optimize animations for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    }
}

// ============================================
// 14. ACCESSIBILITY FEATURES
// ============================================

function initAccessibilityFeatures() {
    // Add aria labels
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        const platforms = ['GitHub', 'Instagram', 'Email'];
        if (platforms[index]) {
            icon.setAttribute('aria-label', `Visit my ${platforms[index]} profile`);
        }
    });
    
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.classList.add('skip-link', 'sr-only');
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const mainContent = document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.tabIndex = -1;
    }
}

// ============================================
// 15. ERROR HANDLING
// ============================================

function initErrorHandling() {
    // Handle image loading errors
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80';
            this.alt = 'Image failed to load';
        });
    });
    
    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Error occurred:', e.error);
    });
    
    // Unhandled promise rejection
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });
}

// ============================================
// 16. CONFETTI EFFECT
// ============================================

function initConfettiEffect() {
    // Function to create confetti
    window.createConfetti = function() {
        const colors = ['#6a11cb', '#2575fc', '#ff416c', '#4CAF50', '#FF9800'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 15 + 5;
            const left = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            
            confetti.style.background = color;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${left}vw`;
            confetti.style.animation = `confetti-fall ${duration}s ease-in ${delay}s forwards`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, (duration + delay) * 1000);
        }
    };
    
    // Add CSS for confetti
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        .confetti {
            position: fixed;
            width: 15px;
            height: 15px;
            background: var(--gradient-primary);
            top: -10px;
            opacity: 0;
            z-index: 9999;
        }
        
        @keyframes confetti-fall {
            0% {
                top: -10px;
                opacity: 1;
                transform: rotate(0deg);
            }
            100% {
                top: 100vh;
                opacity: 0;
                transform: rotate(720deg);
            }
        }
    `;
    document.head.appendChild(confettiStyle);
}

// ============================================
// 17. DECORATION EFFECTS
// ============================================

function initDecorationEffects() {
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + D to toggle dark mode
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            document.getElementById('themeToggle').click();
        }
        
        // Escape to close modal
        if (e.key === 'Escape') {
            const modal = document.getElementById('certificateModal');
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// ============================================
// 18. HERO PHOTO INTERACTION
// ============================================

function initHeroPhotoInteraction() {
    const heroPhotoFrame = document.querySelector('.hero-photo-frame');
    
    if (!heroPhotoFrame) return;
    
    // Efek hover
    heroPhotoFrame.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    heroPhotoFrame.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.animation = 'photoPulse 3s infinite alternate';
    });
    
    // Efek klik
    heroPhotoFrame.addEventListener('click', function() {
        const originalAnimation = this.style.animation;
        this.style.animation = 'spin 1s ease';
        
        setTimeout(() => {
            this.style.animation = originalAnimation;
        }, 1000);
    });
    
    // Add CSS for spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
        }
    `;
    document.head.appendChild(spinStyle);
}

// ============================================
// 19. CONTACT ACTIONS
// ============================================

function initContactActions() {
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent click
            
            const platform = this.closest('.contact-item').querySelector('h3').textContent;
            let message = '';
            
            switch(platform) {
                case 'WhatsApp':
                    message = 'Membuka WhatsApp untuk memulai percakapan...';
                    break;
                case 'Telegram':
                    message = 'Membuka Telegram untuk mengirim pesan...';
                    break;
                case 'Instagram':
                    message = 'Membuka profil Instagram...';
                    break;
            }
            
            // Show notification
            showNotification(message);
        });
    });
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--gradient-primary);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: var(--shadow-hard);
            z-index: 10000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            font-weight: 600;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// ============================================
// 20. SKILL BUTTONS
// ============================================

function initSkillButtons() {
    const skillButtons = document.querySelectorAll('.skill-btn');
    
    skillButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const skillTitle = this.closest('.skill-card').querySelector('h3').textContent;
            let explanation = '';
            
            switch(skillTitle) {
                case 'HTML5':
                    explanation = 'HTML5 adalah versi terbaru dari HyperText Markup Language, bahasa yang digunakan untuk membuat struktur dan konten halaman web. Fitur baru termasuk elemen semantik, audio/video support, canvas untuk grafik, dan improved form controls.';
                    break;
                case 'CSS3':
                    explanation = 'CSS3 adalah versi terbaru dari Cascading Style Sheets, bahasa yang digunakan untuk styling dan layout halaman web. Fitur baru termasuk flexbox, grid layout, animations, transitions, gradients, shadows, dan responsive design features.';
                    break;
                case 'Responsive Design':
                    explanation = 'Responsive Design adalah pendekatan desain web yang membuat halaman web terlihat baik di semua perangkat (desktop, tablet, mobile). Menggunakan fluid grids, flexible images, dan media queries untuk menyesuaikan layout berdasarkan ukuran layar.';
                    break;
            }
            
            // Show skill explanation modal
            showSkillExplanation(skillTitle, explanation);
        });
    });
    
    function showSkillExplanation(title, content) {
        // Remove existing modal if any
        const existingModal = document.getElementById('skillExplanationModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Create modal
        const modal = document.createElement('div');
        modal.id = 'skillExplanationModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2001;
            padding: 20px;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                color: #333;
                padding: 40px;
                border-radius: var(--border-radius-lg);
                max-width: 600px;
                width: 100%;
                position: relative;
                box-shadow: var(--shadow-hard);
                animation: slideUp 0.4s ease;
            ">
                <button id="closeSkillModal" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: var(--gradient-primary);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">×</button>
                
                <h3 style="
                    color: var(--primary-color);
                    font-size: 2rem;
                    margin-bottom: 20px;
                    font-family: 'Montserrat', sans-serif;
                ">${title}</h3>
                
                <p style="
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin-bottom: 30px;
                    color: #555;
                ">${content}</p>
                
                <button style="
                    background: var(--gradient-primary);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: var(--border-radius-md);
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition-fast);
                    font-size: 1rem;
                " id="understandBtn">Mengerti</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Add CSS for animations
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(modalStyle);
        
        // Close modal functions
        const closeModal = () => {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = 'auto';
            }, 300);
        };
        
        document.getElementById('closeSkillModal').addEventListener('click', closeModal);
        document.getElementById('understandBtn').addEventListener('click', closeModal);
        
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.getElementById('skillExplanationModal')) {
                closeModal();
            }
        });
    }
}

// ============================================
// 21. ANALYTICS & TRACKING
// ============================================

function initAnalytics() {
    // Track page views
    console.log('Portfolio viewed:', window.location.pathname);
    
    // Track section views
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Section viewed:', entry.target.id);
                
                // Add visual feedback for viewed sections
                if (!entry.target.classList.contains('viewed')) {
                    entry.target.classList.add('viewed');
                }
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Track clicks
    document.addEventListener('click', function(e) {
        const target = e.target;
        const clickable = target.closest('a, button, .certificate-item, .video-item');
        
        if (clickable) {
            console.log('Clicked:', clickable.textContent?.trim() || clickable.className);
        }
    });
}

// Initialize analytics
initAnalytics();

// ============================================
// 22. VISITOR COUNTER DISPLAY
// ============================================

function initVisitorCounter() {
    // Create visitor counter display
    const visitorCounter = document.createElement('div');
    visitorCounter.id = 'visitorCounter';
    visitorCounter.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 0.9rem;
        z-index: 999;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        opacity: 0.7;
        transition: opacity 0.3s;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    
    const visitCount = localStorage.getItem('visitCount') || 1;
    visitorCounter.innerHTML = `<i class="fas fa-eye"></i> Pengunjung: ${visitCount}`;
    
    // Add icon styles
    const iconStyle = document.createElement('style');
    iconStyle.textContent = `
        #visitorCounter i {
            font-size: 1rem;
        }
    `;
    document.head.appendChild(iconStyle);
    
    document.body.appendChild(visitorCounter);
    
    // Show/hide on hover
    visitorCounter.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
    });
    
    visitorCounter.addEventListener('mouseleave', function() {
        this.style.opacity = '0.7';
    });
}

// Initialize visitor counter
initVisitorCounter();

// ============================================
// 23. TIME-BASED GREETING
// ============================================

function initTimeGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour < 12) greeting = 'Selamat Pagi!';
    else if (hour < 18) greeting = 'Selamat Siang!';
    else greeting = 'Selamat Malam!';
    
    // Add greeting to hero section
    const heroText = document.querySelector('.hero-text p');
    if (heroText) {
        const greetingElement = document.createElement('p');
        greetingElement.style.cssText = `
            font-size: 1.2rem;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 10px;
            opacity: 0.9;
        `;
        greetingElement.textContent = greeting;
        heroText.parentNode.insertBefore(greetingElement, heroText);
    }
}

// Initialize time greeting
initTimeGreeting();

console.log('Portfolio JavaScript loaded successfully!');


// ============================================
// 21. PROJECT BUTTONS INTERACTION
// ============================================

function initProjectButtons() {
    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const projectType = this.classList.contains('live-btn') ? 'Live Demo' :
                              this.classList.contains('github-btn') ? 'GitHub Repository' :
                              'Python Project';
            
            const projectName = this.closest('.project-card').querySelector('h3').textContent;
            
            // Show loading effect
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                showProjectNotification(`Membuka ${projectType} - ${projectName}`);
            }, 800);
            
            // Track project clicks
            console.log(`Project clicked: ${projectName} - ${projectType}`);
        });
    });
    
    function showProjectNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50 0%, #2196F3 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: var(--shadow-hard);
            z-index: 10000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
        notification.innerHTML = `
            <i class="fas fa-rocket"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// Panggil function di DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... fungsi lainnya yang sudah ada ...
    initProjectButtons(); // Tambahkan ini
    
    // Jangan lupa update navbar links
    const navLinks = document.getElementById('navLinks');
    navLinks.innerHTML += `<a href="#projects">Projects</a>`;
});

// ============================================
// 22. PROJECT HOVER EFFECTS
// ============================================

function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add floating effect
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Animate tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                tag.style.transitionDelay = `${index * 0.1}s`;
                tag.style.transform = 'translateY(-5px)';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
            });
        });
    });
}

// Panggil function 
initProjectHoverEffects();