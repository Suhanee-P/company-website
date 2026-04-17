document.addEventListener('DOMContentLoaded', () => {

  // 1. Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = hamburger.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 2. Custom cursor
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .btn, .tab-link, .carousel-dot').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });

  // 3. Scroll animations (IntersectionObserver)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up, .img-reveal').forEach(el => observer.observe(el));

  // 4. Testimonial Carousel
  const track   = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dots    = document.querySelectorAll('.carousel-dot');

  if (track && prevBtn && nextBtn) {
    let current = 0;
    const total = dots.length;
    let autoplayTimer;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach(d => d.classList.remove('active'));
      if (dots[current]) dots[current].classList.add('active');
    }

    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });
    dots.forEach(dot => {
      dot.addEventListener('click', () => { goTo(parseInt(dot.dataset.index)); resetAutoplay(); });
    });

    function startAutoplay()  { autoplayTimer = setInterval(() => goTo(current + 1), 4500); }
    function resetAutoplay()  { clearInterval(autoplayTimer); startAutoplay(); }
    startAutoplay();
  }

  // 5. Services Tabs
  const tabLinks    = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      tabLinks.forEach(item => item.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      link.classList.add('active');
      const target = document.getElementById(link.getAttribute('data-tab'));
      if (target) target.classList.add('active');
    });
  });

});
