/**
 * Main JavaScript File
 * Handles all interactive functionality and dynamic content loading
 */

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    createParticles();
    loadProjects();
    loadInternships();
    loadCertificates();
    initializeSkillBars();
    initializeCounters();
    initializeContactForm();
    initializeScrollToTop();
    initializeScrollAnimations();
});

// ============================================
// Navigation Functions
// ============================================
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// Ultra Modern Particle Animation System
// ============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    
    // Create ultra-modern particle types
    createBubbles(particlesContainer, 6);           // Floating bubbles
    createGlowParticles(particlesContainer, 4);      // Glowing particles
    createSmallParticles(particlesContainer, 12);    // Small dots
    createMediumParticles(particlesContainer, 8);     // Medium particles
    createLargeParticles(particlesContainer, 3);      // Large floating elements
    createNeonParticles(particlesContainer, 5);      // Neon pulsing particles
    createQuantumParticles(particlesContainer, 4);    // Quantum spinning elements
    createHologramParticles(particlesContainer, 6);   // Holographic shapes
    createMatrixRain(particlesContainer, 15);        // Matrix-style falling elements
    
    // Create neural network connections
    createNeuralNetwork();
}

function createBubbles(container, count) {
    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('particle', 'bubble', 'large');
        
        // Random size between 8-16px
        const size = Math.random() * 8 + 8;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random starting position from bottom
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.bottom = '0px';
        
        // Random animation delay
        bubble.style.animationDelay = `${Math.random() * 15}s`;
        
        container.appendChild(bubble);
    }
}

function createGlowParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const glow = document.createElement('div');
        glow.classList.add('particle', 'glow', 'medium');
        
        // Random size
        const size = Math.random() * 4 + 6;
        glow.style.width = `${size}px`;
        glow.style.height = `${size}px`;
        
        // Random position
        glow.style.left = `${Math.random() * 100}%`;
        glow.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        glow.style.animationDelay = `${Math.random() * 20}s`;
        
        container.appendChild(glow);
    }
}

function createSmallParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const small = document.createElement('div');
        small.classList.add('particle', 'small');
        
        // Random position
        small.style.left = `${Math.random() * 100}%`;
        small.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        small.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(small);
    }
}

function createMediumParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const medium = document.createElement('div');
        medium.classList.add('particle', 'medium');
        
        // Random position
        medium.style.left = `${Math.random() * 100}%`;
        medium.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        medium.style.animationDelay = `${Math.random() * 12}s`;
        
        container.appendChild(medium);
    }
}

function createLargeParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const large = document.createElement('div');
        large.classList.add('particle', 'large');
        
        // Random size between 10-20px
        const size = Math.random() * 10 + 10;
        large.style.width = `${size}px`;
        large.style.height = `${size}px`;
        
        // Random position
        large.style.left = `${Math.random() * 100}%`;
        large.style.bottom = '0px';
        
        // Random animation delay
        large.style.animationDelay = `${Math.random() * 18}s`;
        
        container.appendChild(large);
    }
}

function createNeonParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const neon = document.createElement('div');
        neon.classList.add('particle', 'neon');
        
        // Random size
        const size = Math.random() * 6 + 4;
        neon.style.width = `${size}px`;
        neon.style.height = `${size}px`;
        
        // Random position
        neon.style.left = `${Math.random() * 100}%`;
        neon.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        neon.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(neon);
    }
}

function createQuantumParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const quantum = document.createElement('div');
        quantum.classList.add('particle', 'quantum');
        
        // Random size
        const size = Math.random() * 8 + 6;
        quantum.style.width = `${size}px`;
        quantum.style.height = `${size}px`;
        
        // Random position
        quantum.style.left = `${Math.random() * 100}%`;
        quantum.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        quantum.style.animationDelay = `${Math.random() * 15}s`;
        
        container.appendChild(quantum);
    }
}

function createHologramParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const hologram = document.createElement('div');
        hologram.classList.add('particle', 'hologram');
        
        // Random size
        const size = Math.random() * 10 + 8;
        hologram.style.width = `${size}px`;
        hologram.style.height = `${size}px`;
        
        // Random position
        hologram.style.left = `${Math.random() * 100}%`;
        hologram.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        hologram.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(hologram);
    }
}

function createMatrixRain(container, count) {
    const matrixContainer = document.getElementById('matrixRain');
    if (!matrixContainer) return;
    
    for (let i = 0; i < count; i++) {
        const matrix = document.createElement('div');
        matrix.classList.add('particle', 'matrix');
        matrix.textContent = '01';
        
        // Random position
        matrix.style.left = `${Math.random() * 100}%`;
        matrix.style.top = `-20px`;
        
        // Random animation delay
        matrix.style.animationDelay = `${Math.random() * 5}s`;
        
        matrixContainer.appendChild(matrix);
    }
}

function createNeuralNetwork() {
    const neuralContainer = document.getElementById('neuralNetwork');
    if (!neuralContainer) return;
    
    // Create neural network nodes and connections
    const nodeCount = 8;
    const nodes = [];
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.style.position = 'absolute';
        node.style.width = '4px';
        node.style.height = '4px';
        node.style.background = 'var(--neon-green)';
        node.style.borderRadius = '50%';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        node.style.boxShadow = '0 0 10px var(--neon-green)';
        node.style.opacity = '0.6';
        
        neuralContainer.appendChild(node);
        nodes.push(node);
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.random() > 0.7) {
                const connection = document.createElement('div');
                connection.style.position = 'absolute';
                connection.style.height = '1px';
                connection.style.background = 'linear-gradient(90deg, transparent, var(--neon-green), transparent)';
                connection.style.opacity = '0.3';
                
                neuralContainer.appendChild(connection);
            }
        }
    }
}

// ============================================
// Load Projects Dynamically
// ============================================
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    // Check if projectsData exists
    if (typeof projectsData === 'undefined' || !projectsData || projectsData.length === 0) {
        projectsGrid.innerHTML = `
            <div class="no-internships" style="grid-column: 1/-1;">
                <i class="fas fa-code"></i>
                <p>Projects coming soon! Check back later.</p>
            </div>
        `;
        return;
    }

    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        // Create tech stack HTML
        const techStackHTML = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');
        
        // Create links HTML
        const linksHTML = `
            ${project.github ? `
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            ` : ''}
            ${project.demo ? `
                <a href="${project.demo}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            ` : ''}
        `;
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${techStackHTML}
            </div>
            <div class="project-links">
                ${linksHTML}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// Load Internships Dynamically
// ============================================
function loadInternships() {
    const internshipsContainer = document.getElementById('internshipsContainer');
    
    // Check if internshipsData exists and has items
    if (typeof internshipsData === 'undefined' || !internshipsData || internshipsData.length === 0) {
        internshipsContainer.innerHTML = `
            <div class="no-internships">
                <i class="fas fa-briefcase"></i>
                <p>Currently seeking internship opportunities to apply my skills in real-world projects.</p>
                <p style="margin-top: 1rem;">Feel free to reach out if you have any opportunities!</p>
            </div>
        `;
        return;
    }

    internshipsContainer.innerHTML = '';
    
    internshipsData.forEach(internship => {
        const internshipCard = document.createElement('div');
        internshipCard.classList.add('internship-card');
        
        internshipCard.innerHTML = `
            <div class="internship-header">
                <div>
                    <h3>${internship.company}</h3>
                    <h4>${internship.role}</h4>
                    ${internship.location ? `<p style="color: var(--text-muted); margin-top: 0.3rem;"><i class="fas fa-map-marker-alt"></i> ${internship.location}</p>` : ''}
                </div>
                <div class="internship-duration">
                    <i class="far fa-calendar-alt"></i> ${internship.duration}
                </div>
            </div>
            <p>${internship.description}</p>
        `;
        
        internshipsContainer.appendChild(internshipCard);
    });
}

// ============================================
// Load Certificates Dynamically
// ============================================
function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    // Check if certificatesData exists and has items
    if (typeof certificatesData === 'undefined' || !certificatesData || certificatesData.length === 0) {
        certificatesGrid.innerHTML = `
            <div class="no-certificates">
                <i class="fas fa-certificate"></i>
                <p>Certificates section is ready! Add your certifications to showcase your achievements.</p>
                <p style="margin-top: 1rem;">Edit <strong>/data/certificates.js</strong> to add certificates.</p>
            </div>
        `;
        return;
    }

    certificatesGrid.innerHTML = '';
    
    certificatesData.forEach(certificate => {
        const certificateCard = document.createElement('div');
        certificateCard.classList.add('certificate-card');
        
        // Create skills HTML
        const skillsHTML = certificate.skills
            .map(skill => `<span class="certificate-skill-tag">${skill}</span>`)
            .join('');
        
        // Create credential link HTML
        const credentialHTML = certificate.credentialUrl ? `
            <a href="${certificate.credentialUrl}" target="_blank" class="certificate-link">
                <i class="fas fa-external-link-alt"></i> View Certificate
            </a>
        ` : '';
        
        certificateCard.innerHTML = `
            <div class="certificate-header">
                <div style="flex: 1;">
                    <h3>${certificate.title}</h3>
                    <p class="certificate-issuer">${certificate.issuer}</p>
                    <p class="certificate-date">
                        <i class="far fa-calendar-check"></i> ${certificate.date}
                    </p>
                </div>
                <div class="certificate-icon">
                    <i class="fas fa-award"></i>
                </div>
            </div>
            <div class="certificate-skills">
                ${skillsHTML}
            </div>
            ${credentialHTML}
        `;
        
        certificatesGrid.appendChild(certificateCard);
    });
}

// ============================================
// Animate Skill Bars
// ============================================
function initializeSkillBars() {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = `${progress}%`;
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ============================================
// Animate Counter Numbers
// ============================================
function initializeCounters() {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60 FPS
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };

                    updateCounter();
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// ============================================
// Contact Form Handling
// ============================================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (replace with actual backend call)
        simulateFormSubmission(name, email, message);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateFormSubmission(name, email, message) {
    const formMessage = document.getElementById('formMessage');
    const submitButton = document.querySelector('.btn-submit');
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';

    // Simulate API call with timeout
    setTimeout(() => {
        // Success message
        showFormMessage(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`, 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Re-enable button
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';

        // Log to console (for demonstration - remove in production)
        console.log('Form submitted:', { name, email, message });
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 1500);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// ============================================
// Scroll to Top Button
// ============================================
function initializeScrollToTop() {
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Scroll Animations (Fade In)
// ============================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and items for fade-in animation
    const animatedElements = document.querySelectorAll(
        '.project-card, .internship-card, .certificate-card, .skill-category, .timeline-item, .contact-item, .stat-item'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ============================================
// Utility Functions
// ============================================

// Smooth scroll for all anchor links
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

// Console welcome message
console.log('%c👋 Welcome to Nadin Surya\'s Portfolio!', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check it out on GitHub!', 'color: #b0b0b0; font-size: 14px;');
console.log('%chttps://github.com/NadinSuryaS', 'color: #4a9eff; font-size: 14px;');
