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

// READ MORE BUTTON - Opens article details
const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const articleCard = link.closest('.article-card');
    const title = articleCard.querySelector('h3').textContent;
    const description = articleCard.querySelector('p').textContent;
    const category = articleCard.querySelector('.category-tag').textContent;
    
    alert(`📰 ARTICLE: ${title}\n\n${description}\n\nCategory: ${category}\n\n✨ Full article coming soon!`);
  });
});

// SUBMIT YOUR STORY BUTTON - Working form submission
const submitBtn = document.getElementById('submitBtn');

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    // Show a form popup
    const userStory = prompt('📝 Share Your Story!\n\nTell us your story in 2-3 lines (min 10 characters):', '');
    
    if (userStory && userStory.trim().length >= 10) {
      const userName = prompt('What\'s your name?', '');
      const userEmail = prompt('Your email (optional):', '');
      
      if (userName && userName.trim().length > 0) {
        // Show success message
        alert(`✅ STORY SUBMITTED!\n\nThank you ${userName}! 🎉\n\nYour story: "${userStory}"\n\nWe'll feature it soon on Youthwire!\n\nEmail: ${userEmail || 'Not provided'}`);
        
        // In real app, send to backend
        console.log({
          story: userStory,
          name: userName,
          email: userEmail,
          timestamp: new Date().toLocaleString()
        });
      }
    } else if (userStory === null) {
      // User clicked cancel
      console.log('Story submission cancelled');
    } else {
      alert('❌ Please write at least 10 characters!');
    }
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

// Add hover effects to article cards with cursor change
articles.forEach(article => {
  article.style.cursor = 'pointer';
  
  article.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px)';
    this.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
  });
  
  article.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  });
  
  // Click on article card to read more
  article.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A') {
      const readMoreLink = this.querySelector('.read-more');
      if (readMoreLink) readMoreLink.click();
    }
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

// Submit button hover effect
if (submitBtn) {
  submitBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.08)';
    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  });
  
  submitBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('✨ Youthwire website loaded successfully!');
  console.log('🚀 All interactive features are ready!');
  
  // Add some initial animations
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeInDown 0.8s ease-out';
  }
  
  // Show welcome message
  console.log('%c Welcome to Youthwire! 🎯', 'color: #667eea; font-size: 16px; font-weight: bold');
  console.log('%c Click on articles to read more, or submit your own story!', 'color: #764ba2; font-size: 14px');
});

// Analytics tracking
function trackPageView() {
  console.log('📊 Page viewed at', new Date().toLocaleString());
}

trackPageView();

// Performance check
if ('IntersectionObserver' in window) {
  console.log('✅ IntersectionObserver is supported!');
}
