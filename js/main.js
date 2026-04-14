document.addEventListener('DOMContentLoaded', () => {
  // 1. Custom Cursor
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Add hover effect to links and buttons
  const hoverables = document.querySelectorAll('a, button, .btn');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });

  // 2. Intersection Observer for Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-up, .img-reveal');
  animatedElements.forEach(el => observer.observe(el));

  // 3. Services Tabs Logic
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove active class from all
      tabLinks.forEach(item => item.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active to clicked
      link.classList.add('active');
      const targetId = link.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
});
