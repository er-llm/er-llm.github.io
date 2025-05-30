// Debounce function to limit scroll event firing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for smooth scrolling
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimized smooth scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (!element) return;
    
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Optimized navigation highlighting
function updateActiveNavigation() {
    const scrollPosition = window.scrollY + 100;
    
    // Cache section positions
    if (!window.sectionPositions) {
        window.sectionPositions = Array.from(document.querySelectorAll('section')).map(section => ({
            id: section.id,
            top: section.offsetTop,
            bottom: section.offsetTop + section.offsetHeight
        }));
    }

    // Find active section
    const activeSection = window.sectionPositions.find(section => 
        scrollPosition >= section.top && scrollPosition < section.bottom
    );

    if (activeSection) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeSection.id}`);
        });
    }
}

// Initialize navigation with optimized scroll handling
function initializeNavigation() {
    // Smooth scrolling with event delegation
    document.querySelector('.navbar').addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            smoothScroll(target);
        }
    });

    // Throttled scroll event listener
    window.addEventListener('scroll', throttle(() => {
        requestAnimationFrame(updateActiveNavigation);
    }, 100));

    // Update section positions on resize
    window.addEventListener('resize', debounce(() => {
        window.sectionPositions = null;
    }, 250));
}

// Optimized intersection observer
function initializeAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}