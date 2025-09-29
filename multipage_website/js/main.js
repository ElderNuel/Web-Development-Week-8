// main.js - navigation, slider, form validation, scroll animations

document.addEventListener('DOMContentLoaded', () => {
  // Set dynamic year
  const yearEls = [document.getElementById('year'), document.getElementById('year-2'), document.getElementById('year-3')];
  yearEls.forEach(e => { if(e) e.textContent = new Date().getFullYear(); });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  // Simple slider (supports two images; expandable)
  const sliderRoot = document.querySelector('[data-slider]');
  if (sliderRoot) {
    const slides = sliderRoot.querySelectorAll('.slide');
    let index = 0;
    const update = () => {
      const slidesContainer = sliderRoot.querySelector('.slides');
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    };
    sliderRoot.querySelector('[data-next]')?.addEventListener('click', () => {
      index = (index + 1) % slides.length; update();
    });
    sliderRoot.querySelector('[data-prev]')?.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length; update();
    });
    // Auto-advance
    setInterval(() => { index = (index + 1) % slides.length; update(); }, 6000);
  }

  // Form validation (client-side)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      // reset errors
      form.querySelectorAll('.error').forEach(s => s.textContent = '');

      if (!name.value || name.value.trim().length < 2) {
        name.nextElementSibling.textContent = 'Please enter your name (2+ chars).';
        valid = false;
      }
      if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.nextElementSibling.textContent = 'Please enter a valid email.';
        valid = false;
      }
      if (!message.value || message.value.trim().length < 10) {
        message.nextElementSibling.textContent = 'Message must be at least 10 characters.';
        valid = false;
      }

      if (valid) {
        // Simulate form submission - for real site, post to API or use Formspree / Netlify forms
        form.reset();
        const success = document.getElementById('formSuccess');
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // On-scroll reveal for elements with data-animate
  const animated = document.querySelectorAll('[data-animate]');
  const onScroll = () => {
    const rootMargin = 80;
    animated.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= (window.innerHeight - rootMargin)) el.classList.add('in-view');
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll(); // initial check
});
