console.log("%c👋 Hi there! Need a DevOps expert? Let's chat!", "color: #06b6d4; font-size: 16px;");

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      navLinks.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Header scroll effect
  if (window.scrollY > 100) {
    header.style.background = 'rgba(15, 23, 42, 0.98)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.95)';
  }
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoLink = `mailto:brm.anish.choudhary@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;
    alert('Thank you for your message! Your email client will open to send the message.');
    this.reset();
  });
}

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 1000);
}

// Stats animation
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const finalValue = stat.textContent;
    const numericValue = parseFloat(finalValue);
    const suffix = finalValue.replace(/[\d.]/g, '');

    let currentValue = 0;
    const increment = numericValue / 50;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        currentValue = numericValue;
        clearInterval(timer);
      }
      stat.textContent = currentValue.toFixed(suffix.includes('.') ? 1 : 0) + suffix;
    }, 30);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Typing effect
  const subtitle = document.querySelector('.hero .subtitle');
  if (subtitle) {
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 80);
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Trigger stats animation if it's the hero section
        if (entry.target.classList.contains('hero')) {
          setTimeout(animateStats, 500);
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe sections for animations
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

//client-side validation
contactForm.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = darkModeToggle.querySelector('i');

// Check for saved user preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-mode');
  darkModeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle dark/light mode
darkModeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('fa-moon', !isDark);
  darkModeIcon.classList.toggle('fa-sun', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Add dark mode styles to your CSS
/* Add this to your existing CSS */
.dark-mode {
  background-color: #0f172a;
  color: #ffffff;
}

.dark-mode .skill-card,
.dark-mode .experience-content {
  background: rgba(30, 41, 59, 0.6);
  color: #ffffff;
}

/* Light mode styles */
.light-mode {
  background-color: #f8fafc;
  color: #0f172a;
}

.light-mode .skill-card,
.light-mode .experience-content {
  background: rgba(226, 232, 240, 0.8);
  color: #0f172a;
}
