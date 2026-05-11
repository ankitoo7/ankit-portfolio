/* Shared JS for case studies */
(function(){
  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Counters
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const isFloat = target % 1 !== 0;
    const dur = 1400;
    const start = performance.now();
    const wrapEm = el.querySelector('em');
    function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = target * eased;
      const text = (isFloat ? v.toFixed(1) : Math.round(v)) + suffix;
      if (wrapEm) wrapEm.textContent = text;
      else el.textContent = text;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const cIO = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        animateCount(en.target);
        cIO.unobserve(en.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => cIO.observe(el));

  // Scroll progress + nav state + back-to-top
  const progress = document.getElementById('progress');
  const nav = document.getElementById('nav');
  const toTop = document.getElementById('to-top');
  function onScroll() {
    const h = document.documentElement;
    const sc = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const p = max ? (sc / max) * 100 : 0;
    if (progress) progress.style.width = p + '%';
    if (nav) nav.classList.toggle('scrolled', sc > 8);
    if (toTop) toTop.classList.toggle('show', sc > 600);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Page transition fade-in
  document.body.classList.add('page-loaded');
})();
