// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to current navigation link
window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Submit button functionality
const submitBtn = document.getElementById('submitBtn');

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    alert('Thank you for your interest! Submit your story by emailing us at hello@youthwire.com');
  });
}

// Add intersection observer for fade-in animations
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

// Observe all article cards
const articles = document.querySelectorAll('.article-card');
articles.forEach(article => {
  article.style.opacity = '0';
  article.style.transform = 'translateY(20px)';
  article.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(article);
});

// Add hover effects to article cards
articles.forEach(article => {
  article.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px)';
  });
  
  article.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Mobile menu toggle (if you add hamburger menu later)
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Detect scroll position and update nav styling
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Youthwire website loaded successfully!');
  
  // Add some initial animations
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeInDown 0.8s ease-out';
  }
});

// Analytics tracking (optional - replace with your tracking code)
function trackPageView() {
  console.log('Page viewed at', new Date().toLocaleString());
}

// Call tracking on page load
trackPageView();

// Performance optimization - lazy load images if needed in future
if ('IntersectionObserver' in window) {
  console.log('IntersectionObserver is supported!');
}
