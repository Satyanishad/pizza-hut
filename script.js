// Toggle Mobile Navigation Menu
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navMenu = document.getElementById("navMenu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

// Close Mobile Menu When a Link is Clicked
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  });
});

// Update Cart Count Dynamically
const cartCount = document.getElementById("cartCount");
let count = 0;

// Simulate Adding Items to Cart
setInterval(() => {
  count++;
  cartCount.textContent = count;

  // Reset Cart Count After 10 Items (for demo purposes)
  if (count === 10) {
    count = 0;
  }
}, 3000); // Update every 3 seconds

// Smooth Scrolling for Navigation Links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


// script.js
const coverflow = document.querySelector('.coverflow');
const dealCards = document.querySelectorAll('.deal-card');
let currentIndex = 1;

// Autoplay Function
function autoplay() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % dealCards.length;
    updateCoverflow();
  }, 3000); // Change slide every 3 seconds
}

// Update Coverflow
function updateCoverflow() {
  dealCards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.opacity = 1;
      card.style.transform = 'scale(1)';
    } else {
      card.style.opacity = 0.6;
      card.style.transform = 'scale(0.8)';
    }
  });

  // Move the coverflow container
  const offset = -currentIndex * (dealCards[0].offsetWidth + 20); // 20px gap
  coverflow.style.transform = `translateX(${offset}px)`;
}

// Initialize Autoplay
autoplay();

let currentTestimonial = 0;

function showTestimonial(index) {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');

  // Hide all testimonials
  testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  // Remove active class from all dots
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the selected testimonial and dot
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  currentTestimonial = index;
}

// Auto-slide functionality
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % 3;
  showTestimonial(currentTestimonial);
}, 5000); // Change testimonial every 5 seconds